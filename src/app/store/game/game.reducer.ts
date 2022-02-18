import { createReducer, on, Action } from '@ngrx/store';
import { GameActions } from '.';
import { GameState } from './game.state';

const initialState: GameState = {
  games: undefined,
  loading: false,
};

const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGames, (state) => {
    const newState = { ...state } as GameState;
    newState.loading = true;
    return newState;
  }),
  on(GameActions.loadGamesSuccess, (state, { games }) => {
    const newState = { ...state } as GameState;
    newState.loading = false;
    newState.games = games;

    return newState;
  }),
  on(GameActions.loadGamesError, (state, payload) => {
    const newState = { ...state } as GameState;
    newState.loading = false;
    return newState;
  })
);

export function reducer(state: GameState, action: Action) {
  return gameReducer(state, action);
}
