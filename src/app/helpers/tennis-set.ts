import { TennisMatchEnum, TennisSetEnum } from "./enums";

export class TennisSet {
  gamesPlayerOne: number = 0;
  gamesPlayerTwo: number = 0;

  isTerminated: boolean = false;
  onTieBreak: boolean = false;

  constructor() {}

  updateSetStatus(player: TennisMatchEnum): void {
    if(this.onTieBreak) {
      if(this.gamesPlayerOne > this.gamesPlayerTwo) {
        this.isTerminated = true;
      }
      else if(this.gamesPlayerOne < this.gamesPlayerTwo) {
        this.isTerminated = true;
      }
    }
    else {
      if(player === TennisMatchEnum.PLAYER_1) {
        if(this.gamesPlayerOne >= TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
          if(this.gamesPlayerOne - this.gamesPlayerTwo >= TennisSetEnum.MINIMUM_DIFFERENCE_OF_GAMES_TO_WIN) {
            this.isTerminated = true;
          }
          if(this.gamesPlayerTwo === TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
            this.onTieBreak = true;
          }
        }
      }
      else if(player === TennisMatchEnum.PLAYER_2) {
        if(this.gamesPlayerTwo >= TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
          if(this.gamesPlayerTwo - this.gamesPlayerOne >= TennisSetEnum.MINIMUM_DIFFERENCE_OF_GAMES_TO_WIN) {
            this.isTerminated = true;
          }
          if(this.gamesPlayerOne === TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
            this.onTieBreak = true;
          }
        }
      }
    }
  }

  addGamePlayerOne(): void {
    if(this.onTieBreak) {
      this.gamesPlayerOne++;
    }
    else {
      if(this.gamesPlayerOne <= TennisSetEnum.NUMBER_OF_GAMES_TO_WIN && this.gamesPlayerTwo < TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
        this.gamesPlayerOne++;
      }
      else if(this.gamesPlayerTwo === TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
        this.gamesPlayerOne++;
      }
    }

    this.updateSetStatus(TennisMatchEnum.PLAYER_1);
  }

  addGamePlayerTwo(): void {
    if(this.onTieBreak) {
      this.gamesPlayerTwo++;
    }
    else {
      if(this.gamesPlayerTwo <= TennisSetEnum.NUMBER_OF_GAMES_TO_WIN && this.gamesPlayerOne < TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
        this.gamesPlayerTwo++;
      }
      else if(this.gamesPlayerOne === TennisSetEnum.NUMBER_OF_GAMES_TO_WIN) {
        this.gamesPlayerTwo++;
      }
    }

    this.updateSetStatus(TennisMatchEnum.PLAYER_2);
  }
}