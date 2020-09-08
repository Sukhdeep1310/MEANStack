import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from "../movie";
import { switchMap } from 'rxjs/operators';
import {MovieServiceService} from "../movie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MovieServiceService]
})
export class DetailsPageComponent implements OnInit {
   isCollapsed: boolean=true;
  constructor(
    private movieServiceService:MovieServiceService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  toggleCollapse(){
    this.isCollapsed =! this.isCollapsed;
  }

  newMovie:Movie;

  ngOnInit() :void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.movieServiceService.getSingleMovie(params['movieid'])
      }))
      .subscribe((newMovie:Movie) => {
        this.newMovie=newMovie;
        this.pageContent.header.title = newMovie.name;
        this.pageContent.header.body = "Details for selected Movie";
      });

  }
  public deleteNewMovie(movieid: string): void{
    this.movieServiceService.deleteMovie(movieid);
    window.location.href='/list';
  }
  public formError: string;
  private formIsValid() : boolean{
    if(this.newMovie.name && this.newMovie.category && this.newMovie.price &&
      this.newMovie.starcast && this.newMovie.language && this.newMovie.description){
      return true;
    }
    else {
      return false;
    }
  }
  public  updateMovie(newMovie:Movie) : void{
    this.formError="";
    if(this.formIsValid()){
      this.movieServiceService.updateMovie(newMovie);
      window.location.href='/list';
    }
    else{
      this.formError="All fields required, please try again";
    }
  }
  pageContent = {
    header: {
      title:'',
      body:''
    }
  };

}
