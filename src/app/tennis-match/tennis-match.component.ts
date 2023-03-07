import { Component, OnInit } from '@angular/core';
import { TennisMatchEnum } from '../helpers/enums';
import { TennisMatch } from '../helpers/tennis-match';

@Component({
  selector: 'app-tennis-match',
  templateUrl: './tennis-match.component.html',
  styleUrls: ['./tennis-match.component.css']
})
export class TennisMatchComponent implements OnInit {

  score: string = "";
  currentGameStatus: string = "";
  matchStatus: string = "";

  tennisMatch: TennisMatch = new TennisMatch();

  ngOnInit() {
    
  }

  givePointToPlayerOne() {
    this.tennisMatch.givePointPlayerOne();
  }

  givePointToPlayerTwo() {
    this.tennisMatch.givePointPlayerTwo();
  }

  initMatch() {
    this.tennisMatch.initMatch();
  }
}
