import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarOpen: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  activateLink() {
    if (this.navbarOpen) {
      this.navbarOpen = false;
    }
  }

  constructor() {}

  ngOnInit() {}
}
