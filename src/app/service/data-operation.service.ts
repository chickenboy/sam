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

  // Get list category
  getLstCategory(){
    return this.http.get('http://localhost:8080/category');
  }

  // get list hot product
  getLstHotProduct(){
    return this.http.get('http://localhost:8080/hot-product');
  }
}
