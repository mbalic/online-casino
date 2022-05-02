import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/constants/category.contants';
import { GameData } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() game: GameData;
  @Input() currentCategory: string;

  isTopAndNew: boolean = false;
  isTop: boolean = false;
  isNew: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isTop =
      this.currentCategory !== Category.Top.url && this.game?.categories.includes(Category.Top.url);

    this.isNew =
      this.currentCategory !== Category.New.url && this.game?.categories.includes(Category.New.url);

    this.isTopAndNew = this.isTop && this.isNew;
  }
}
