import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {
  @Input() isTop: boolean;
  @Input() isNew: boolean;

  isTopAndNew: boolean;

  constructor() {}

  ngOnInit() {
    this.isTopAndNew = this.isTop && this.isNew;
  }
}
