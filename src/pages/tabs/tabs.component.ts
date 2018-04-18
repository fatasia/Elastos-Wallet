import { Component, OnInit } from '@angular/core';
import { InfiniteLoaderComponent } from 'ngx-weui';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
/*    let time: number;

    function onSelect() {
      this.time = new Date().getTime();
    }

    let items: any[] = Array(20).fill(0).map((v: any, i: number) => i);
    onLoadMore(comp: InfiniteLoaderComponent){
      Observable.timer(1500).subscribe(() => {

        this.items.push(...Array(10).fill(this.items.length).map((v, i) => v + i));

        if (this.items.length >= 50) {
          comp.setFinished();
          return;
        }
        comp.resolveLoading();
      });
    }*/
  }





}
