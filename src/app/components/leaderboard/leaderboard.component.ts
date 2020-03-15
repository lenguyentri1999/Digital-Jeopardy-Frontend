import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  games: Observable<Game[]> = new Observable<Game[]>();
  rankingsDict: Map<string, Observable<{name: string, score: number}[]>> = new Map();

  constructor(
    protected qService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.games = this.qService.getGames();
  }

  viewRankings(gameID: string) {
    this.rankingsDict.set(gameID, this.qService.getScores(gameID));
  }

}
