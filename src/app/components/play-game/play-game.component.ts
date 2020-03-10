import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Observable, timer } from 'rxjs';
import { Game } from 'src/app/models/game';
import { MatDialog } from '@angular/material/dialog';
import { Question } from 'src/app/models/question';
import { QuestionDialogComponent } from '../question-dialog/question-dialog.component';

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
    protected dialog: MatDialog,
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

  openDialog(q: Question) {
    console.log(q);
    setTimeout(() => {
      const dialogRef = this.dialog.open(QuestionDialogComponent, {
        width: '50vw',
        height: '50vh',
        data: { question: q }
      });

    }, 1000);
  }

  // getKeys(obj: any) {
  //   if (!obj) {
  //     return;
  //   }
  //   return Object.keys(obj);
  // }

}
