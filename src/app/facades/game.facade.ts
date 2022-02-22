import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { GameActions, GameSelectors } from '../store/game';
import { GameData } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameFacade {
  constructor(private store$: Store<AppState>) {}

  loadGames() {
    this.store$.dispatch(GameActions.loadGames());
  }

  getGamesByCategory(category: string): Observable<GameData[]> {
    return this.store$.select(GameSelectors.getGamesByCategory(category));
  }

  isLoading(): Observable<boolean> {
    return this.store$.select(GameSelectors.isLoading);
  }

  loadJackpots() {
    this.store$.dispatch(GameActions.loadJackpots());
  }
}
