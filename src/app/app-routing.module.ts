import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { PlayGameComponent } from './components/play-game/play-game.component';


const routes: Routes = [
  { path: 'create-game', component: CreateGameComponent, pathMatch: 'full' },
  { path: 'play-game', component: PlayGameComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
