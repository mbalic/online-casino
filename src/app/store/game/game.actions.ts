import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/models/game';

export const loadGames = createAction('[Games] Load games');

export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ games: Game[] }>()
);

export const loadGamesError = createAction(
  '[Games] Load Games Error',
  props<{ httpError: any; defaultErrorMessage: string }>()
);
