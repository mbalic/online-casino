import { GameData } from 'src/app/models/game';

export interface GameState {
  games: GameData[] | null;
  loading: boolean;
}
