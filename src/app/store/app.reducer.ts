import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromGameReducer from 'src/app/store/game/game.reducer';

export const reducers: ActionReducerMap<AppState> = {
  game: fromGameReducer.reducer,
};
