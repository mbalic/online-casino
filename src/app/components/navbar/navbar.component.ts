import { Component } from '@angular/core';
import { PAGE_TITLES } from 'src/app/constants/page-title.constants';
import { Category } from 'src/app/enums/category.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarOpen: boolean = false;
  PAGE_TITLES = PAGE_TITLES;
  Category = Category;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  activateLink() {
    if (this.navbarOpen) {
      this.navbarOpen = false;
    }
  }
}
