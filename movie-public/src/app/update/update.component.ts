import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Movie } from "../movie";
import { switchMap } from 'rxjs/operators';
import {MovieServiceService} from "../movie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [MovieServiceService]
})
export class UpdateComponent implements OnInit {

  constructor(private movieServiceService:MovieServiceService,
              private route:ActivatedRoute,
              private router: Router) { }
  newMovie:Movie;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.movieServiceService.getSingleMovie(params['movieid'])
      }))
      .subscribe((newMovie:Movie) => {
        this.newMovie=newMovie;
        this.pageContent.header.title = newMovie.name;
        this.pageContent.header.body = "update  selected Movie";
      });

  }

  public updateMovie(newMovie: Movie): void{
    this.movieServiceService.updateMovie(newMovie);
    window.location.href='/list';
  }
  pageContent = {
    header: {
      title:'',
      body:''
    }
  };


}
