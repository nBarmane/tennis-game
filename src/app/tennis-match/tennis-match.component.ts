import { Component, OnInit } from '@angular/core';
import { TennisMatchEnum } from '../helpers/enums';
import { TennisMatch } from '../helpers/tennis-match';

@Component({
  selector: 'app-tennis-match',
  templateUrl: './tennis-match.component.html',
  styleUrls: ['./tennis-match.component.css']
})
export class TennisMatchComponent implements OnInit {

  matchInProgress: boolean = true;

  tennisMatch: TennisMatch = new TennisMatch();

  ngOnInit() {
    
  }

  givePointToPlayerOne() {
    this.tennisMatch.givePointPlayerOne();
    this.matchInProgress = this.tennisMatch.matchStatus == TennisMatchEnum.MATCH_IN_PROGRESS;
  }
  
  givePointToPlayerTwo() {
    this.tennisMatch.givePointPlayerTwo();
    this.matchInProgress = this.tennisMatch.matchStatus == TennisMatchEnum.MATCH_IN_PROGRESS;
  }

  initMatch() {
    this.tennisMatch.initMatch();
    this.matchInProgress = true;
  }
}
