import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { Category } from 'src/app/enums/category.enum';

const expenseNoticeState = (state: AppState) => state.game;

export const getAllGames = createSelector(expenseNoticeState, (state) =>
  state.games === undefined ? null : state.games
);

export const getGamesByCategory = (category: string) =>
  createSelector(expenseNoticeState, (state) => {
    if (state.games === undefined) {
      return null;
    }

    if (category === Category.Other) {
      const ballGames = state.games.filter((i) => i.categories.includes('ball'));
      const funGames = state.games.filter((i) => i.categories.includes('fun'));
      const virtualGames = state.games.filter((i) => i.categories.includes('virtual'));

      return [...ballGames, ...funGames, ...virtualGames];
    } else {
      return state.games.filter((i) => i.categories.includes(category));
    }
  });
