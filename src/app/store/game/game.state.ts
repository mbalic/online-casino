import { Game } from 'src/app/models/game';

export interface GameState {
  games: Game[];
  loading: boolean;
}
