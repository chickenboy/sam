import { DataOperationService } from './../service/data-operation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers : any[];

  constructor(private service : DataOperationService) { }

  ngOnInit() {
    this.service.getFollowers()
    .subscribe(response =>{
      this.followers = response.json();
    });
  }

}
