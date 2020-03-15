import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionService } from './services/question.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


import { FlashCardComponent } from './components/flash-card/flash-card.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { QuestionDialogComponent } from './components/question-dialog/question-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent,
    FlashCardComponent,
    PlayGameComponent,
    QuestionDialogComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [
    QuestionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
