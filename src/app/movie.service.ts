import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Injectable } from '@angular/core';
import { Movies } from './movie.datasource';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private LoggingService:LoggingService) { }
  getMovies():Observable<Movie[]>{
    this.LoggingService.add('movieService : Listing movie');
    return of(Movies);
  }
}
