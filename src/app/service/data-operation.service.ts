import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataOperationService {

  constructor(private http : Http) {}

  getFollowers(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
