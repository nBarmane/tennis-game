import { TennisGameEnum, TennisMatchEnum, TennisTieBreakEnum } from "./enums";
import { TennisGame } from "./tennis-game";
import { TennisSet } from "./tennis-set";
import { TennisTieBreak } from "./tennis-tie-break";

export class TennisMatch {
  currentGame: TennisGame = new TennisGame();
  currentTieBreak: TennisTieBreak = new TennisTieBreak();
  currentSet: TennisSet = new TennisSet();
  sets: Array<TennisSet> = [this.currentSet];
  scores: Array<string> = [TennisMatchEnum.INITIAL_SCORE];
  allSetsScore: string = TennisMatchEnum.INITIAL_SCORE;
  
  numberOfSetsWonP1: number = 0;
  numberOfSetsWonP2: number = 0;

  // scoreBoard
  matchScore: string = TennisMatchEnum.INITIAL_SCORE;
  currentGameStatus: string = TennisGameEnum.ZERO_ZERO;
  currentTieBreakStatus: string = TennisTieBreakEnum.ZERO_ZERO;
  matchStatus: string = TennisMatchEnum.MATCH_IN_PROGRESS;

  onTieBreak: boolean = false;

  initMatch() {
    this.currentGame = new TennisGame();
    this.currentTieBreak = new TennisTieBreak();
    this.currentSet = new TennisSet();
    this.sets = [this.currentSet];
    this.scores = [TennisMatchEnum.INITIAL_SCORE];
    this.allSetsScore = TennisMatchEnum.INITIAL_SCORE;
    
    this.numberOfSetsWonP1 = 0;
    this.numberOfSetsWonP2 = 0;

    this.matchScore = TennisMatchEnum.INITIAL_SCORE;
    this.currentGameStatus = TennisGameEnum.ZERO_ZERO;
    this.currentTieBreakStatus = TennisTieBreakEnum.ZERO_ZERO;
    this.matchStatus = TennisMatchEnum.MATCH_IN_PROGRESS;
    
    this.onTieBreak = false;
  }

  buildMatchScore(): void {
    this.scores = [];
    this.sets.forEach(set => {
      this.scores.push(`(${set.gamesPlayerOne}-${set.gamesPlayerTwo})`);
    });
  }

  givePointPlayerOne() {
    this.givePoint(TennisMatchEnum.PLAYER_1);
  }

  givePointPlayerTwo() {
    this.givePoint(TennisMatchEnum.PLAYER_2);
  }

  updateScoreBoard() {
    this.buildMatchScore();
    this.matchScore = this.scores.join(" ");

    this.currentGameStatus = this.currentGame.getStatus();
    this.currentTieBreakStatus = this.currentTieBreak.getStatus();

    this.allSetsScore = `(${this.numberOfSetsWonP1}-${this.numberOfSetsWonP2})`;
    if(this.isMatchEnded()) {
      if(this.numberOfSetsWonP1 === parseInt(TennisMatchEnum.MAXIMUM_NUMBER_OF_SETS)) {
        this.matchStatus = TennisMatchEnum.PLAYER_ONE_WINS;
      }
      if(this.numberOfSetsWonP2 === parseInt(TennisMatchEnum.MAXIMUM_NUMBER_OF_SETS)) {
        this.matchStatus = TennisMatchEnum.PLAYER_TWO_WINS;
      }
    }
  }

  givePoint(player: TennisMatchEnum) {
    if(player === TennisMatchEnum.PLAYER_1) {
      if(!this.onTieBreak) {
        this.currentGame.givePointPlayerOne();
        if(this.currentGame.getStatus() === TennisGameEnum.PLAYER_ONE_WINS) {
          this.currentSet.addGamePlayerOne();

          this.currentGame.initGame();
        }
      }
      else {
        this.currentTieBreak.givePointPlayerOne();
        if(this.currentTieBreak.getStatus() === TennisTieBreakEnum.PLAYER_ONE_WINS) {
          this.currentSet.addGamePlayerOne();
        }
      }
    }
    else if(player === TennisMatchEnum.PLAYER_2) {
      if(!this.onTieBreak) {
        this.currentGame.givePointPlayerTwo();
        if(this.currentGame.getStatus() === TennisGameEnum.PLAYER_TWO_WINS) {
          this.currentSet.addGamePlayerTwo();

          this.currentGame.initGame();
        }
      }
      else {
        this.currentTieBreak.givePointPlayerTwo();
        if(this.currentTieBreak.getStatus() === TennisTieBreakEnum.PLAYER_TWO_WINS) {
          this.currentSet.addGamePlayerTwo();
        }
      }
    }
    
    if(this.currentSet.isTerminated) {
      this.onTieBreak = false;
      
      this.currentTieBreak = new TennisTieBreak();
      
      if(this.currentSet.gamesPlayerOne > this.currentSet.gamesPlayerTwo) {
        this.numberOfSetsWonP1++;
      }
      else {
        this.numberOfSetsWonP2++;
      }
      
      if(!this.isMatchEnded()) {

        this.currentSet = new TennisSet();
        this.sets.push(this.currentSet);
        this.scores.push(TennisMatchEnum.INITIAL_SCORE);
      }
    }
    if(this.currentSet.onTieBreak) {
      this.onTieBreak = true;

    }

    this.updateScoreBoard();
  }

  isMatchEnded() {
    if(this.numberOfSetsWonP1 === parseInt(TennisMatchEnum.MAXIMUM_NUMBER_OF_SETS)) {
      return true;
    }
    if(this.numberOfSetsWonP2 === parseInt(TennisMatchEnum.MAXIMUM_NUMBER_OF_SETS)) {
      return true;
    }
    return false;
  }
}
