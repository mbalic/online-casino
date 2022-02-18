import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameFacade } from 'src/app/facades/game.facade';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  games$: Observable<Game[]>;

  category: string;

  constructor(private gameFacade: GameFacade, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('type');
    this.games$ = this.gameFacade.getGamesByCategory(this.category);
  }
}
