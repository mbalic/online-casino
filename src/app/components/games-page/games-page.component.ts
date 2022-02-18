import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  games$: Observable<Game>;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games$ = this.gameService.loadAllGames();
  }
}
