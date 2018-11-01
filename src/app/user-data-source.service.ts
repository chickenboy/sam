import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataSourceService {
  constructor(private http : Http) { 
  }

  getDataUser(){
     return this.http.get('http://localhost:8080/');
  }
  
}
