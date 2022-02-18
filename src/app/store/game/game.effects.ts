import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GameActions } from '.';
import { GameService } from 'src/app/services/game.service';

@Injectable()
export class GameEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGames),
      mergeMap(() =>
        this.gameService.loadAllGames().pipe(
          map((games) => {
            return GameActions.loadGamesSuccess({ games });
          }),
          catchError((httpError) =>
            of(
              GameActions.loadGamesError({
                httpError,
                defaultErrorMessage: 'Error occured',
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private gameService: GameService) {}
}
