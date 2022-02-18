import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameFacade } from 'src/app/facades/game.facade';
import { GameData } from 'src/app/models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent implements OnInit {
  games$: Observable<GameData[]>;
  category: string;

  constructor(private gameFacade: GameFacade, private router: Router) {}

  ngOnInit() {
    // Get category from url
    this.category = this.router.url.substring(1);

    this.games$ = this.gameFacade.getGamesByCategory(this.category);
  }
}
