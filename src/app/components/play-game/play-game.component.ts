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
  isPlaying: boolean = false;

  games: Observable<Game[]> = new Observable<Game[]>();
  // currentGame: Observable<Game> = new Observable<Game>();
  currentGame: Game;

  constructor(
    protected qService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.games = this.qService.getGames();
    this.games.subscribe(val => console.log(val));
  }

  onPlayButton(game: Game) {
    this.currentGame = game;
    console.log(this.currentGame);
    this.isPlaying = true;
  }

  generateArray(i: number) {
    return Array.from(Array(i), (x, i) => i);
  }

  // getKeys(obj: any) {
  //   if (!obj) {
  //     return;
  //   }
  //   return Object.keys(obj);
  // }

}
