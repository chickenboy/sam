import { Component, OnInit } from '@angular/core';

export interface ItemGrid {
  name: string;
  from: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public imagesUrl;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  tiles: ItemGrid[] = [
    {name: 'May giat cong thuc 1', from: 'Viet Name', price: 10000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/media/catalog/product/w/f/wfs9019fs_1000x1000.u600.d20160815.t112335.950177.jpg'},
    {name: 'May giat cong thuc 2', from: 'Viet Nam', price: 20000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/bd/30/86/9c0f6cb23a6129c75c7fa1bb64cb167e.jpg'},
    {name: 'May giat cong thuc 3', from: 'Viet Lame', price: 30000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f4/b2/7e/d6f51fa7abb048828d58dccba71186ff.jpg'},
    {name: 'May giat cong thuc 4', from: 'Viet Lam', price: 50000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f3/a1/19/29f633be69614e045a84bf8acb65cd83.jpg'},
    {name: 'May giat cong thuc 4', from: 'Viet Lam', price: 50000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f3/a1/19/29f633be69614e045a84bf8acb65cd83.jpg'},
    {name: 'May giat cong thuc 4', from: 'Viet Lam', price: 50000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f3/a1/19/29f633be69614e045a84bf8acb65cd83.jpg'},
    {name: 'May giat cong thuc 4', from: 'Viet Lam', price: 50000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f3/a1/19/29f633be69614e045a84bf8acb65cd83.jpg'},
    {name: 'May giat cong thuc 4', from: 'Viet Lam', price: 50000, imageUrl: 'https://salt.tikicdn.com/cache/200x200/ts/product/f3/a1/19/29f633be69614e045a84bf8acb65cd83.jpg'}
  ];
  //dataLst : any[]; 
  constructor() { }

  ngOnInit() {
    //this.dataLst = ['Item1', 'Item2', 'Item3', 'Item4'];
    this.imagesUrl = [
      'https://www.cars.co.za/carimages_gen/Audi-TT/Audi-TT-coupe-1.8TFSI_AudiTT3c6l.jpg',
      'http://comicsalliance.com/files/2011/04/strips02.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/73/f3/08/73f30861d214eea1d6c5d99fe72b3053.jpg',
      'http://www.telegraph.co.uk/cars/images/2017/01/24/A5-Sportback-main-xlarge_trans_NvBQzQNjv4BqZR6q1BRVjLLZ5nciTmZ6ABYYy2HF4Csw_oYIEcbI_AA.jpg'
      ];
  }

}
