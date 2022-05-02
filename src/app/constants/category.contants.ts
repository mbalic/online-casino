import { CategoryModel } from '../models/category';

export const Category = {
  Top: { name: 'Top games', url: 'top' },
  New: { name: 'New games', url: 'new' },
  Slots: { name: 'Slots', url: 'slots' },
  Jackpots: { name: 'Jackpots', url: 'jackpots' },
  Live: { name: 'Live', url: 'live' },
  Blackjack: { name: 'Blackjack', url: 'blackjack' },
  Roulette: { name: 'Roulette', url: 'roulette' },
  Table: { name: 'Table', url: 'table' },
  Poker: { name: 'Poker', url: 'poker' },
  Other: { name: 'Other', url: 'other' },
};

export function getAllCategories(): CategoryModel[] {
  return [
    Category.Top,
    Category.New,
    Category.Slots,
    Category.Jackpots,
    Category.Live,
    Category.Blackjack,
    Category.Roulette,
    Category.Table,
    Category.Poker,
    Category.Other,
  ];
}
