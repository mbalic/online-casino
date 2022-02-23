/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';

describe('Service: Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
