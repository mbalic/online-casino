import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/enums/category.enum';
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
      this.currentCategory !== Category.Top && this.game?.categories.includes(Category.Top);

    this.isNew =
      this.currentCategory !== Category.New && this.game?.categories.includes(Category.New);

    this.isTopAndNew = this.isTop && this.isNew;
  }
}
