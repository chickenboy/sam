import {Component} from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent {

  comeToHomePage(){
    window.location.replace('');
  }

  comeToAboutPage(){
    window.location.replace('/about');
  }

  getListFollowers(){
    window.location.replace('/follower');
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
