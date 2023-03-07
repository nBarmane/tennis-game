import { TennisTieBreakEnum, TennisMatchEnum } from "./enums";
import { TennisGame } from "./tennis-game";

export class TennisTieBreak {  
  scorePlayerOne: number = 0;
  scorePlayerTwo: number = 0;

  tieBreakStatus: string = TennisTieBreakEnum.ZERO_ZERO;

  constructor() {}

  initGame(): void {
    this.scorePlayerOne = 0;
    this.scorePlayerTwo = 0;
    
    this.tieBreakStatus = TennisTieBreakEnum.ZERO_ZERO;
  }

  updateTieBreakStatus() {
    this.tieBreakStatus = `${this.scorePlayerOne}-${this.scorePlayerTwo}`;
    if(this.scorePlayerOne >= TennisTieBreakEnum.MINIMUM_NUMBER_OF_POINTS_TO_WIN || this.scorePlayerTwo >= TennisTieBreakEnum.MINIMUM_NUMBER_OF_POINTS_TO_WIN) {
      if(this.scorePlayerOne - this.scorePlayerTwo >= TennisTieBreakEnum.MINIMUM_DIFFERENCE_OF_POINTS_TO_WIN) {
        this.tieBreakStatus = TennisTieBreakEnum.PLAYER_ONE_WINS;
      }
      if(this.scorePlayerTwo - this.scorePlayerOne >= TennisTieBreakEnum.MINIMUM_DIFFERENCE_OF_POINTS_TO_WIN) {
        this.tieBreakStatus = TennisTieBreakEnum.PLAYER_TWO_WINS;
      }
    }
  }

  givePointPlayerOne(): void {
    if(this.checkIfTieBreakEnded()) {
      return;
    }

    this.scorePlayerOne++;
        
    this.updateTieBreakStatus();
  }
  
  givePointPlayerTwo(): void {
    if(this.checkIfTieBreakEnded()) {
      return;
    }
    
    this.scorePlayerTwo++;
    
    this.updateTieBreakStatus();
  }

  getStatus(): string {
    return this.tieBreakStatus;
  }

  checkIfTieBreakEnded(): boolean {
    return [TennisTieBreakEnum.PLAYER_ONE_WINS.toString(), TennisTieBreakEnum.PLAYER_TWO_WINS.toString()].includes(this.tieBreakStatus) ? true : false;
  }
}