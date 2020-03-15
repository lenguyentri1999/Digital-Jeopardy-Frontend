import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl: string;
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '/' 
  });

  constructor(
    protected http: HttpClient
  ) { 
    this.baseUrl = environment.API_URL;
  }

  getGames(): Observable<Game[]> {
    return this.http.get(`${this.baseUrl}/games`)
    .pipe(
      map(obj => {
        const games: Game[] = [];
        Object.keys(obj).forEach(key => {
          const deserialized = obj[key];
          const game = new Game(deserialized.questions, deserialized.name, deserialized.id);
          games.push(game);
        })
        return games;
      })
    )
  }

  sendGame(game: Game) {
    return this.http.post(`${this.baseUrl}/create-game`, {game: JSON.stringify(game)}, {headers: this.corsHeaders}).subscribe(val => {
      console.log(val);
    });
  }

  sendScore(name: string, score: number, gameID: string) {
    let data = {
      name: name,
      score: score,
      id: gameID
    };

    return this.http.post(`${this.baseUrl}/send-score`, data, {headers: this.corsHeaders}).subscribe(val => {
      console.log(val);
    })
  }

  getScores(gameID: string): Observable<{name: string, score: number}[]> {
    return this.http.post(`${this.baseUrl}/get-score`, {id: gameID}, {headers: this.corsHeaders})
    .pipe(
      map(val => {
        let scores: {name: string, score: number}[] = [];
        scores = Object.keys(val).map(k => val[k]);
        scores = scores.sort(function(a, b) {
          return b.score - a.score;
        });
        return scores;
      })
    )
  }

  public uuidv4() {
    let d = new Date().getTime(); // Timestamp
    // tslint:disable-next-line:max-line-length
    let d2 = (performance && performance.now && (performance.now() * 1000)) || 0; // Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16; // random number between 0 and 16
      if (d > 0) { // Use timestamp until depleted
        // tslint:disable-next-line:no-bitwise
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {// Use microseconds since page-load if supported
        // tslint:disable-next-line:no-bitwise
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      // tslint:disable-next-line:no-bitwise
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
