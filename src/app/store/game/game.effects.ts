import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GameActions } from '.';
import { GameService } from 'src/app/services/game.service';
import { GameData } from 'src/app/models/game';

@Injectable()
export class GameEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGames),
      mergeMap(() =>
        this.gameService.loadGames().pipe(
          map((data) => {
            let games = data.map((item) => ({ ...item, jackpot: 0 } as GameData));
            return GameActions.loadGamesSuccess({ games });
          }),
          catchError((httpError) =>
            of(
              GameActions.loadGamesError({
                httpError,
                defaultErrorMessage: 'Error loading games',
              })
            )
          )
        )
      )
    )
  );

  loadJackpots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadJackpots),
      mergeMap(() =>
        this.gameService.loadJackpots().pipe(
          map((jackpots) => {
            return GameActions.loadJackpotsSuccess({ jackpots });
          }),
          catchError((httpError) =>
            of(
              GameActions.loadJackpotsError({
                httpError,
                defaultErrorMessage: 'Error loading jackpots',
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private gameService: GameService) {}
}
