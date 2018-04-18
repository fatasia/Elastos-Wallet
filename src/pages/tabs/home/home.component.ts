import {Component, OnInit} from '@angular/core';
import { RouterUtil} from '../../../providers/RouterUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private router: RouterUtil) {

  }

  ngOnInit() {
  }

  next() {
    this.router.Go('launcher');
  }

}
