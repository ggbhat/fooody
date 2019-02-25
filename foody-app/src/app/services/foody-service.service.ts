import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodyService {
  foodUrl:string = 'food-metadata.json';
  

  constructor(private http:HttpClient) { }

  // Get Food
  getFoods():Observable<Food[]> {
    return this.http.get<Food[]>("/assets/food-metadata.json");
  }

  

  
}
