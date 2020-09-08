import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private movieUrl = 'http://localhost:3000/api/movies';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');


  constructor(private http:HttpClient) { }

  getMovies() : Promise<void | Movie[]> {
    return this.http.get(this.movieUrl)
      .toPromise()
      .then(response => response as Movie[])
      .catch(this.handleError);
  }
  getSingleMovie(movieid: string): Promise<void | Movie> {
    return this.http.get(this.movieUrl + '/'+ movieid)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
  }
  createMovie(newMovie: Movie): Promise<void | Movie>{
    return this.http.post(this.movieUrl, newMovie)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
  }
  deleteMovie(movieid: string): Promise<void | Movie> {
    return this.http.delete(this.movieUrl + '/'+ movieid)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
  }
  updateMovie(movie: Movie): Promise<void | Movie> {
    return this.http.put(this.movieUrl + '/'+ movie._id,movie)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.log("error");
  }
}
