import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './pages/games-page/games-page.component';

const routes: Routes = [
  {
    path: ':type',
    component: GamesPageComponent,
  },
  // {
  //   path: 'new',
  //   component: GamesPageComponent,
  //   data: { title: 'New games' },
  // },
  // {
  //   path: 'slots',
  //   component: GamesPageComponent,
  //   data: { title: 'Slots' },
  // },
  // {
  //   path: 'jackpots',
  //   component: GamesPageComponent,
  //   data: { title: 'Jackpots' },
  // },
  // {
  //   path: 'live',
  //   component: GamesPageComponent,
  //   data: { title: 'Live' },
  // },
  // {
  //   path: 'blackjack',
  //   component: GamesPageComponent,
  //   data: { title: 'Blackjack' },
  // },
  // {
  //   path: 'roulette',
  //   component: GamesPageComponent,
  //   data: { title: 'Roulett' },
  // },
  // {
  //   path: 'table',
  //   component: GamesPageComponent,
  //   data: { title: 'Table' },
  // },
  // {
  //   path: 'poker',
  //   component: GamesPageComponent,
  //   data: { title: 'Poker' },
  // },
  // {
  //   path: 'other',
  //   component: GamesPageComponent,
  //   data: { title: 'Other' },
  // },
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
