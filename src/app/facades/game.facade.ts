import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { GameActions, GameSelectors } from '../store/game';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  constructor(private store$: Store<AppState>) {}

  loadGames() {
    this.store$.dispatch(GameActions.loadGames());
  }

  getGames(): Observable<Game[]> {
    return this.store$.select(GameSelectors.getAllGames);
  }

  getGamesByCategory(category: string): Observable<Game[]> {
    return this.store$.select(GameSelectors.getGamesByCategory(category));
  }
}
