import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from "../movie-service.service";
import {Movie} from "../movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MovieServiceService]
})
export class CreateComponent implements OnInit {
  public newMovie: Movie = {
    _id: '',
    name: '',
    category: '',
    price: '',
    starcast: '',
    language: '',
    description: ''
  };

  constructor(private phoneDataService: MovieServiceService, private router: Router) { }

  ngOnInit(){

  }

  /*public createNewMovie(newMovie:Movie): void {
    this.phoneDataService.createMovie(newMovie);
    this.router.navigate(['/list']);

  }*/
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
  public  createNewMovie(newMovie:Movie) : void{
    this.formError="";
    if(this.formIsValid()){
      this.phoneDataService.createMovie(newMovie);
      this.router.navigate(['/list']);

    }
    else{
      this.formError="All fields required, please try again";
    }
  }

}
