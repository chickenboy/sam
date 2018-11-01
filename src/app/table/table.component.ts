import { UserDataSourceService } from './../user-data-source.service';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  age: number;
  address: string;
  salary: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  dataSource: any[];
  
  constructor(private datSev : UserDataSourceService){
    this.datSev.getDataUser()
      .subscribe(response => {
        this.dataSource = response.json();
      });
  }

  displayedColumns: string[] = ['id','name', 'age', 'address', 'salary'];
  
}
