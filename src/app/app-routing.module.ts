import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';

const routes: Routes = [
  {
    path: 'top',
    component: GamesListComponent,
    data: { title: 'Top games' },
  },
  {
    path: 'new',
    component: GamesListComponent,
    data: { title: 'New games' },
  },
  {
    path: 'slots',
    component: GamesListComponent,
    data: { title: 'Slots' },
  },
  {
    path: 'jackpots',
    component: GamesListComponent,
    data: { title: 'Jackpots' },
  },
  {
    path: 'live',
    component: GamesListComponent,
    data: { title: 'Live' },
  },
  {
    path: 'blackjack',
    component: GamesListComponent,
    data: { title: 'Blackjack' },
  },
  {
    path: 'roulette',
    component: GamesListComponent,
    data: { title: 'Roulett' },
  },
  {
    path: 'table',
    component: GamesListComponent,
    data: { title: 'Table' },
  },
  {
    path: 'poker',
    component: GamesListComponent,
    data: { title: 'Poker' },
  },
  {
    path: 'other',
    component: GamesListComponent,
    data: { title: 'Other' },
  },
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'top',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
