import { Component, OnInit } from '@angular/core';

import {BaseComponent} from './BaseComponent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent extends BaseComponent  implements OnInit{


  ngOnInit() {
    console.log(this.header.getHeaderDisplay());

  }



}
