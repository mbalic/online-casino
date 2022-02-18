import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { Jackpot } from '../models/jackpot';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  loadGames(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/games');
  }

  loadJackpots(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>('/api/jackpots');
  }
}
