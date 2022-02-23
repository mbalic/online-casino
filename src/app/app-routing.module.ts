import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { PAGE_TITLES } from './constants/page-title.constants';
import { Category } from 'src/app/enums/category.enum';

const routes: Routes = [
  {
    path: Category.Top,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.topGames },
  },
  {
    path: Category.New,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.newGames },
  },
  {
    path: Category.Slots,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.slots },
  },
  {
    path: Category.Jackpots,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.jackpots },
  },
  {
    path: Category.Live,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.live },
  },
  {
    path: Category.Blackjack,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.blackjack },
  },
  {
    path: Category.Roulette,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.roulette },
  },
  {
    path: Category.Table,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.table },
  },
  {
    path: Category.Poker,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.poker },
  },
  {
    path: Category.Other,
    component: GamesListComponent,
    data: { title: PAGE_TITLES.other },
  },
  {
    path: '',
    redirectTo: Category.Top,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: Category.Top,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
