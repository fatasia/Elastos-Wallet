import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../app/BaseComponent';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.less']
})
export class CoinComponent extends BaseComponent implements OnInit {




  ngOnInit() {
    this.header.initHeader('ELA');
    this.log.info('coin');
  }

}
