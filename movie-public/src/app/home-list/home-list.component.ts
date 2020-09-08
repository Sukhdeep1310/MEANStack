import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieServiceService } from "../movie-service.service";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [MovieServiceService]
})
export class HomeListComponent implements OnInit {
  movies: Movie[]

  constructor(private movieServiceService: MovieServiceService) { }

  ngOnInit(){
    this.movieServiceService
      .getMovies()
      .then((movies:Movie[])=> {
        this.movies = movies.map(movie => {
          return movie;
        });
      });
  }


}
