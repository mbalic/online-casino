import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { Category } from './constants/category.contants';

const routes: Routes = [
  {
    path: ':category',
    component: GamesListComponent,
  },
  {
    path: '',
    redirectTo: Category.Top.url,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
