import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl: string;

  constructor(
    protected http: HttpClient
  ) { 
    this.baseUrl = environment.API_URL;
  }

  getGames() {
    return this.http.get(`${this.baseUrl}/games`).subscribe(val => {
      console.log(val);
    })
  }
}
