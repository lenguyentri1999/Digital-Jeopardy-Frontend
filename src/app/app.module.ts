import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionService } from './services/question.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateGameComponent } from './components/create-game/create-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    QuestionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
