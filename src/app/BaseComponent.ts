import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RouterUtil} from './../providers/RouterUtil';
import {Logger} from './../providers/Logger';


@Component({
  selector: 'app-base',
  template: ''
})
export  class BaseComponent {
  public title = 'app';




  public constructor(public router: RouterUtil,
                     public log: Logger,
                     public activateRoute: ActivatedRoute) { // 用来uri获取参数

  }

  /**获取参数id*/
  getId() {
    return this.activateRoute.snapshot.params['id'];
  }


}
