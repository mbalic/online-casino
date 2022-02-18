export interface Game {
  id: string;
  name: string;
  image: string;
  categories: string[];
}

export interface GameData extends Game {
  jackpot: number;
}
