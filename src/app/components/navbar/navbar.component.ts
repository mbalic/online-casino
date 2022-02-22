import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarOpen: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  activateLink() {
    if (this.navbarOpen) {
      this.navbarOpen = false;
    }
  }
}
