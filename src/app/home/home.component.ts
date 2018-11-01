import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  //dataLst : any[]; 
  constructor() { }

  ngOnInit() {
    //this.dataLst = ['Item1', 'Item2', 'Item3', 'Item4'];
    this.imagesUrl = [
      'IMAGE_URL1.jpg',
      'IMAGE_URL2.jpg',
      'IMAGE_URL3.jpg',
      ];
  }

}
