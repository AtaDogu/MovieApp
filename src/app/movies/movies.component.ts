import { Movies } from './../movie.datasource';
import { Component } from "@angular/core";

@Component({
  selector: 'movies',
  templateUrl:'./movies.component.html'
})
export class MoviesComponent{
  title='Movie List';
  movies=Movies;

}
