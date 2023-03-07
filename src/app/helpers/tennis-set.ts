import { TennisMatchEnum, TennisSetEnum } from "./enums";

export class TennisSet {
  gamesPlayerOne: number = 0;
  gamesPlayerTwo: number = 0;

  isTerminated: boolean = false;
  onTieBreak: boolean = false;

  constructor() {}

  updateSetStatus(player: TennisMatchEnum): void {
    if(player === TennisMatchEnum.PLAYER_1) {
      if(this.gamesPlayerOne === 6) {
        if(this.gamesPlayerOne - this.gamesPlayerTwo >= 2) {
          this.isTerminated = true;
        }
        if(this.gamesPlayerTwo === 6) {
          this.onTieBreak = true;
        }
      }
    }
    else if(player === TennisMatchEnum.PLAYER_2) {
      if(this.gamesPlayerTwo === 6) {
        if(this.gamesPlayerTwo - this.gamesPlayerOne >= 2) {
          this.isTerminated = true;
        }
        if(this.gamesPlayerOne === 6) {
          this.onTieBreak = true;
        }
      }
    }
  }

  addGamePlayerOne(): void {
    if(this.gamesPlayerOne < TennisSetEnum.MAXIMUM_GAMES_PER_SET) {
      this.gamesPlayerOne++;
    }

    this.updateSetStatus(TennisMatchEnum.PLAYER_1);
  }

  addGamePlayerTwo(): void {
    if(this.gamesPlayerTwo < TennisSetEnum.MAXIMUM_GAMES_PER_SET) {
      this.gamesPlayerTwo++;
    }

    this.updateSetStatus(TennisMatchEnum.PLAYER_2);
  }
}