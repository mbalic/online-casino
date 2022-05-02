import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { getAllCategories } from './constants/category.contants';
import { GameFacade } from './facades/game.facade';
import { CategoryModel } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private gameFacade: GameFacade) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.categories = getAllCategories();

    this.gameFacade.loadGames();

    interval(3000).subscribe(() => {
      this.gameFacade.loadJackpots();
    });
  }
}
