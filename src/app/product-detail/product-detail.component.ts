import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{
  items : string[] = [
    'https://salt.tikicdn.com/cache/75x75/ts/product/ed/59/90/dbb02d5332621df9b6632d846236e132.jpg',
    'https://salt.tikicdn.com/cache/75x75/ts/product/3a/02/b2/be23973b8f30b61d0629c39be41e1ca3.jpg',
    'https://salt.tikicdn.com/cache/75x75/ts/product/1c/3d/0b/1e43320d222c112dfa9aa66e11625a99.jpg',
    'https://salt.tikicdn.com/cache/75x75/ts/product/c9/08/0e/3a6f0d9df3cb9df9e2a5005065999d4f.jpg',
    'https://salt.tikicdn.com/cache/75x75/ts/product/ef/cd/b5/6f28862ca24d5b6cf318e8e8621bd1e0.jpg'
  ];

  itemZoomed = 'https://salt.tikicdn.com/cache/w1200/ts/product/ed/59/90/dbb02d5332621df9b6632d846236e132.jpg';
  itemSelected = 'https://salt.tikicdn.com/cache/w1200/ts/product/ed/59/90/dbb02d5332621df9b6632d846236e132.jpg';

}
