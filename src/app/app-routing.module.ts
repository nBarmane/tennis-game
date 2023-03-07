import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TennisMatchComponent } from './tennis-match/tennis-match.component';

const routes: Routes = [
  { path: '', redirectTo: "tennis-game", pathMatch: 'full'},
  { path: 'tennis-game', component: TennisMatchComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
