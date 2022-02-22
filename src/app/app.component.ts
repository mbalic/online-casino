import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { interval } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { GameFacade } from './facades/game.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private gameFacade: GameFacade
  ) {}

  ngOnInit(): void {
    this.setPageTitle();
    this.loadData();
  }

  setPageTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.titleService.setTitle(`${event['title']} - Online casino`);
      });
  }

  loadData() {
    this.gameFacade.loadGames();

    interval(3000).subscribe(() => {
      this.gameFacade.loadJackpots();
    });
  }
}
