import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],

})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');

    const broswerLang = translate.getBrowserLang();
    translate.use(broswerLang.match(/en|zh/) ? broswerLang : 'zh');
  }


  changeLang(lang) {
    console.log(lang);
    this.translate.use(lang);
  }

  getLang() {
    console.log(this.translate.getBrowserLang());
    console.log(this.translate.getBrowserCultureLang());
  }
}
