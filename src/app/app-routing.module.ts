import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'play-game', pathMatch: 'full'},
  { path: 'create-game', component: CreateGameComponent, pathMatch: 'full' },
  { path: 'play-game', component: PlayGameComponent, pathMatch: 'full' },
  { path: 'leaderboard', component: LeaderboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
