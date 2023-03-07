import { TennisGameEnum, TennisMatchEnum } from "./enums";
import { TennisGame } from "./tennis-game";
import { TennisSet } from "./tennis-set";

export class TennisMatch {
  maximumNumberOfSets;

  currentGame: TennisGame = new TennisGame();
  currentSet: TennisSet = new TennisSet();
  sets: Array<TennisSet> = [this.currentSet];
  scores: Array<string> = [TennisMatchEnum.INITIAL_SCORE];

  // scoreBoard
  matchScore: string = TennisMatchEnum.INITIAL_SCORE;
  currentGameStatus: string = TennisGameEnum.ZERO_ZERO;
  matchStatus: string = TennisMatchEnum.MATCH_IN_PROGRESS;

  onTieBreak: boolean = false;
  
  constructor(maximumNumberOfSets = 3) {
    this.maximumNumberOfSets = maximumNumberOfSets;
  }

  initMatch() {
    this.currentGame = new TennisGame();
    this.currentSet = new TennisSet();
    this.sets = [this.currentSet];
    this.scores = [TennisMatchEnum.INITIAL_SCORE];

    this.matchScore = TennisMatchEnum.INITIAL_SCORE;
    this.currentGameStatus = TennisGameEnum.ZERO_ZERO;
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
    // this.matchStatus = ...;
  }

  givePoint(player: TennisMatchEnum) {
    if(player === TennisMatchEnum.PLAYER_1) {
      this.currentGame.givePointPlayerOne();
      if(this.currentGame.getStatus() === TennisGameEnum.PLAYER_ONE_WINS) {
        this.currentSet.addGamePlayerOne();
        this.currentGame.initGame();
      }
    }
    else if(player === TennisMatchEnum.PLAYER_2) {
      this.currentGame.givePointPlayerTwo();
      if(this.currentGame.getStatus() === TennisGameEnum.PLAYER_TWO_WINS) {
        this.currentSet.addGamePlayerTwo();
        this.currentGame.initGame();
      }
    }
    
    if(this.currentSet.isTerminated) {
      this.onTieBreak = false;

      this.currentSet = new TennisSet();
      this.sets.push(this.currentSet);
      this.scores.push(TennisMatchEnum.INITIAL_SCORE);
    }
    if(this.currentSet.onTieBreak) {
      this.onTieBreak = true;
    }

    this.updateScoreBoard();
  }
}
