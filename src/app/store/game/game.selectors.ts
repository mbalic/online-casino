import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';

const expenseNoticeState = (state: AppState) => state.game;

export const getAllGames = createSelector(expenseNoticeState, (state) =>
  state.games === undefined ? null : state.games
);

export const getGamesByCategory = (category: string) =>
  createSelector(expenseNoticeState, (state) =>
    state.games === undefined ? null : state.games.filter((i) => i.categories.includes(category))
  );
