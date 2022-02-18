import { Component, OnInit } from '@angular/core';
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
  }
}
