import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Question } from 'src/app/models/question';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  game: Game;
  currCategory: string;

  questionForm: FormGroup;

  constructor(
    protected fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.game = new Game();
    this.questionForm = this.fb.group({
      q: new FormControl('', [Validators.required]),
      a: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })
  }

  createCategory(c: string) {
    this.game.addCategory(c);
    this.currCategory = '';
  }

  createQuestion() {
    const question = new Question(this.questionForm.get('q').value, this.questionForm.get('a').value);
    this.game.addQuestion(this.questionForm.get('category').value, question);
    console.log(JSON.stringify(this.game));
  }

}
