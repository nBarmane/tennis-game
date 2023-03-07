import { TennisGameEnum, TennisMatchEnum } from "./enums";

export class TennisGame {  
  scorePlayerOne: string = TennisGameEnum.ZERO;
  scorePlayerTwo: string = TennisGameEnum.ZERO;

  gameStatus: string = TennisGameEnum.ZERO_ZERO;

  constructor() {}

  initGame(): void {
    this.scorePlayerOne = TennisGameEnum.ZERO;
    this.scorePlayerTwo = TennisGameEnum.ZERO;
    
    this.gameStatus = TennisGameEnum.ZERO_ZERO;
  }

  static incrementScore(playerScore: string, opponentScore: string) {
    switch (playerScore) {
      case TennisGameEnum.ZERO:
        return TennisGameEnum.FIFTEEN;

      case TennisGameEnum.FIFTEEN:
        return TennisGameEnum.THIRTY;

      case TennisGameEnum.THIRTY:
        return TennisGameEnum.FORTY;

      case TennisGameEnum.FORTY:
        return TennisGameEnum.PLAYER_WINS;

      case TennisGameEnum.DEUCE:
        if(opponentScore === TennisGameEnum.ADVANTAGE) {
          return TennisGameEnum.DEUCE;
        }
        return TennisGameEnum.ADVANTAGE;
      
      case TennisGameEnum.ADVANTAGE:
        return TennisGameEnum.PLAYER_WINS;

      default:
        return TennisGameEnum.ZERO;
    }
  }

  updateGameStatus() {
    if(this.scorePlayerOne === TennisGameEnum.PLAYER_WINS) {
      this.gameStatus = TennisGameEnum.PLAYER_ONE_WINS;
    }
    else if(this.scorePlayerTwo === TennisGameEnum.PLAYER_WINS) {
      this.gameStatus = TennisGameEnum.PLAYER_TWO_WINS;
    }
    else if(this.scorePlayerOne === TennisGameEnum.ADVANTAGE) {
      this.gameStatus = TennisGameEnum.ADVANTAGE_PLAYER_ONE;
    }
    else if(this.scorePlayerTwo === TennisGameEnum.ADVANTAGE) {
      this.gameStatus = TennisGameEnum.ADVANTAGE_PLAYER_TWO;
    }
    else if(this.scorePlayerOne === TennisGameEnum.DEUCE && this.scorePlayerTwo === TennisGameEnum.DEUCE) {
      this.gameStatus = TennisGameEnum.DEUCE;
    }
    else {
      this.gameStatus = `${this.scorePlayerOne}-${this.scorePlayerTwo}`; 
    }
  }

  updateOpponentScore(player: TennisMatchEnum): void {
    if(player === TennisMatchEnum.PLAYER_1) {
      if(this.scorePlayerOne === TennisGameEnum.DEUCE) {
        if([TennisGameEnum.FORTY.toString(), TennisGameEnum.ADVANTAGE.toString()].includes(this.scorePlayerTwo)) {
          this.scorePlayerTwo = TennisGameEnum.DEUCE;
        }
      }
      else if(this.scorePlayerOne === TennisGameEnum.FORTY && this.scorePlayerTwo === TennisGameEnum.FORTY) {
        this.scorePlayerOne = TennisGameEnum.DEUCE;
        this.scorePlayerTwo = TennisGameEnum.DEUCE;
      }
    }
    else if(player === TennisMatchEnum.PLAYER_2) {
      if(this.scorePlayerTwo === TennisGameEnum.DEUCE) {
        if([TennisGameEnum.FORTY.toString(), TennisGameEnum.ADVANTAGE.toString()].includes(this.scorePlayerOne)) {
          this.scorePlayerOne = TennisGameEnum.DEUCE;
        }
      }
      else if(this.scorePlayerOne === TennisGameEnum.FORTY && this.scorePlayerTwo === TennisGameEnum.FORTY) {
        this.scorePlayerOne = TennisGameEnum.DEUCE;
        this.scorePlayerTwo = TennisGameEnum.DEUCE;
      }
    }
  }

  givePointPlayerOne(): void {
    if(this.checkIfGameEnded()) {
      return;
    }

    this.scorePlayerOne = TennisGame.incrementScore(this.scorePlayerOne, this.scorePlayerTwo);
    
    this.updateOpponentScore(TennisMatchEnum.PLAYER_1);
    
    this.updateGameStatus();
  }
  
  givePointPlayerTwo(): void {
    if(this.checkIfGameEnded()) {
      return;
    }
    
    this.scorePlayerTwo = TennisGame.incrementScore(this.scorePlayerTwo, this.scorePlayerOne);

    this.updateOpponentScore(TennisMatchEnum.PLAYER_2);
    
    this.updateGameStatus();
  }

  getStatus(): string {
    return this.gameStatus;
  }

  checkIfGameEnded(): boolean {
    return [TennisGameEnum.PLAYER_ONE_WINS.toString(), TennisGameEnum.PLAYER_TWO_WINS.toString()].includes(this.gameStatus) ? true : false;
  }
}