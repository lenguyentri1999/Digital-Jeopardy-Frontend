import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {
  games: Observable<Game[]> = new Observable<Game[]>();

  constructor(
    protected qService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.games = this.qService.getGames();
    this.games.subscribe(val => console.log(val));
  }

  // getKeys(obj: any) {
  //   if (!obj) {
  //     return;
  //   }
  //   return Object.keys(obj);
  // }

}
