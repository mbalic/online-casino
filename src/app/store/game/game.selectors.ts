import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { Category } from 'src/app/constants/category.contants';

const gameState = (state: AppState) => state.game;

export const getGamesByCategory = (category: string) =>
  createSelector(gameState, (state) => {
    if (!state?.games) {
      return null;
    }

    if (category === Category.Other.url) {
      const ballGames = state.games.filter((i) => i.categories.includes('ball'));
      const funGames = state.games.filter((i) => i.categories.includes('fun'));
      const virtualGames = state.games.filter((i) => i.categories.includes('virtual'));

      return [...ballGames, ...funGames, ...virtualGames];
    } else {
      return state.games.filter((i) => i.categories.includes(category));
    }
  });

export const isLoading = createSelector(gameState, (state) => state.loading);
