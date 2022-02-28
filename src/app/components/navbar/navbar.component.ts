import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/models/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() categories: CategoryModel[];

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
