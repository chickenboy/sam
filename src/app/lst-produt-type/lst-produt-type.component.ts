import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lst-produt-type',
  templateUrl: './lst-produt-type.component.html',
  styleUrls: ['./lst-produt-type.component.css']
})
export class LstProdutTypeComponent implements OnInit {
  items : any[];
  constructor() { }

  ngOnInit() {
    this.items = [{name : 'Điện Thoại - Máy Tính Bảng', icon : 'phone'}, 
                  {name : 'Tivi - Thiết bị nghe nhìn', icon : 'tv'},
                  {name : 'Phụ Kiện - Thiết Bị Số', icon : 'print'},
                  {name : 'Đồ chơi, Mẹ & Bé', icon : 'toys'}];
  }

}
