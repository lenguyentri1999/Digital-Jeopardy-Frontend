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
        const games = [];
        Object.keys(obj).forEach(key => {
          games.push(obj[key]);
        })
        return games;
      })
    )

    // .subscribe(val => {
    //   console.log(val);
    // })
  }

  sendGame(game: Game) {
    return this.http.post(`${this.baseUrl}/create-game`, {game: JSON.stringify(game)}, {headers: this.corsHeaders}).subscribe(val => {
      console.log(val);
    });

  }
}
