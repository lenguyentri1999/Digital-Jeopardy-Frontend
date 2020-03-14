import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/models/question';


@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {
  q: Question;
  answered: boolean = false;
  prompt_class: string = "";
  answer_class: string = "hidden"

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.q = data.question;
  }

  ngOnInit(): void {
  }

  toggleExit() {
    this.answered = !this.answered;
    this.prompt_class = 'animated bounceOutLeft'
    this.answer_class = 'animated bounceInRight'
  }

  onCloseDialog(isCorrect: boolean) {
    this.dialogRef.close(isCorrect);
  }

}
