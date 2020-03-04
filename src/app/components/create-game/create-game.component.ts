import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Question } from 'src/app/models/question';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  game: Game;
  currCategory: string;

  questionForm: FormGroup;
  nameForm: FormGroup;

  constructor(
    protected fb: FormBuilder,
    protected qService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.game = new Game();
    this.questionForm = this.fb.group({
      q: new FormControl('', [Validators.required]),
      a: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })
    this.nameForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }

  setName() {
    this.game.setName(this.nameForm.get('name').value);
  }

  createCategory(c: string) {
    this.game.addCategory(c);
    this.currCategory = '';
  }

  createQuestion() {
    const question = new Question(this.questionForm.get('q').value, this.questionForm.get('a').value);
    this.game.addQuestion(this.questionForm.get('category').value, question);
  }

  submitGame() {
    this.setName();
    this.qService.sendGame(this.game);
  }

}
