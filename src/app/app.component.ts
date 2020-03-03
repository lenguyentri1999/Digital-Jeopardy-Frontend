import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(
    protected qService: QuestionService,

  ) {

  }

  ngOnInit(): void {
    this.qService.getGames();
  }
  
}
