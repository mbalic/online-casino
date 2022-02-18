import { createAction, props } from '@ngrx/store';
import { Game, GameData } from 'src/app/models/game';
import { Jackpot } from 'src/app/models/jackpot';

export const loadGames = createAction('[Games] Load games');

export const loadGamesSuccess = createAction(
  '[Games] Load Games Success',
  props<{ games: GameData[] }>()
);

export const loadGamesError = createAction(
  '[Games] Load Games Error',
  props<{ httpError: any; defaultErrorMessage: string }>()
);

export const loadJackpots = createAction('[Games] Load Jackpots');

export const loadJackpotsSuccess = createAction(
  '[Games] Load Jackpots Success',
  props<{ jackpots: Jackpot[] }>()
);

export const loadJackpotsError = createAction(
  '[Games] Load Jackpots Error',
  props<{ httpError: any; defaultErrorMessage: string }>()
);
