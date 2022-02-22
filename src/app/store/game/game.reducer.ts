import { createReducer, on, Action } from '@ngrx/store';
import { GameActions } from '.';
import { GameState } from './game.state';

const initialState: GameState = {
  games: [],
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
    newState.games = games;
    newState.loading = false;

    return newState;
  }),
  on(GameActions.loadGamesError, (state) => {
    const newState = { ...state } as GameState;
    newState.loading = false;

    return newState;
  }),
  on(GameActions.loadJackpotsSuccess, (state, { jackpots }) => {
    const newState = { ...state } as GameState;
    if (newState?.games) {
      let newGames = [...newState.games];
      jackpots.forEach((p) => {
        let index = newState.games.findIndex((q) => q.id === p.game);
        if (index !== -1) {
          let game = { ...newState.games[index] };

          // game.jackpot = game.jackpot + p.amount; -> this would be if we want to sum values from each api call
          game.jackpot = p.amount;
          newGames[index] = game;
        }
      });
      newState.games = newGames;
    }

    return newState;
  })
);

export function reducer(state: GameState, action: Action) {
  return gameReducer(state, action);
}
