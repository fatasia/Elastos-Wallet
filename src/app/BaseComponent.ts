import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RouterUtil} from './../providers/RouterUtil';
import {Logger} from './../providers/Logger';
import {Location} from '@angular/common';
import {Config} from '../providers/Config';
import {HeaderComponent} from './header/app.header';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent {




  public constructor(public router: RouterUtil,
                     public log: Logger,
                     public activateRoute: ActivatedRoute,
                     public config: Config,
                     public location: Location,
                     public header: HeaderComponent,
                     public translate: TranslateService) {
    this.translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');

    const broswerLang = this.translate.getBrowserLang();
    this.translate.use(broswerLang.match(/en|zh/) ? broswerLang : 'zh');
  }



  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
  }

  getLang() {
    console.log(this.translate.getBrowserLang());
    console.log(this.translate.getBrowserCultureLang());
  }

  /**获取参数id*/
  public getId() {
    return this.activateRoute.snapshot.params['id'];
  }


  public checkNull(text) {
    return text == null || text === undefined || text === {} || text === '';
  }

}
