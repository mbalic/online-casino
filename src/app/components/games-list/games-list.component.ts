import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  isLoading$: Observable<boolean>;
  category: string;

  constructor(private gameFacade: GameFacade, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.category = p['category'];
      this.games$ = this.gameFacade.getGamesByCategory(this.category);
    });

    this.isLoading$ = this.gameFacade.isLoading();
  }
}
