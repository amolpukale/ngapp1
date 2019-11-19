import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  GetData()
  {
    return this.http.get("http://localhost:3537/vehicle");
  }
}