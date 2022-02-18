import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { GameFacade } from './facades/game.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private gameFacade: GameFacade) {}

  ngOnInit(): void {
    this.gameFacade.loadGames();

    interval(3000).subscribe(() => {
      this.gameFacade.loadJackpots();
    });
  }
}
