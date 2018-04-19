import {Component, OnInit} from '@angular/core';

import {Location} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.less']
})
export class HeaderComponent  {


  public constructor(public location: Location ) {

  }




  /**
   * 标题栏对象
   * @type {{title: string; show: boolean; rightIcon: string; backIcon: string; backCLick: () => void; rightClick: () => any}}
   */
  private header = {
    title: 'app',
    show: true,
    rightIcon: '',
    backIcon: './../assets/images/icon/icon-back-arrow.svg',
    backCLick: function () {
      this.Back();
    },
    rightClick: function () {

    }
  };

  public getHeaderDisplay() {
    return this.header.show;
  }



  /**
   * 设置显示状态
   * @param {boolean} isShow
   */
  public setHeaderDisplay(isShow: boolean) {
    this.header.show = isShow;
  }

  /***
   * 初始化 标题栏
   * @param {string} title
   * @param {string} backIcon
   * @param {string} rightIcon
   * @param {void} backCLick
   * @param {string} rightClick
   */
  public initHeader(title: string,
                    backIcon: string = './images/icon/icon-back-arrow.svg',
                    rightIcon: string = '',
                    backClick: any = () => { this.Back() },
                    rightClick: any = '') {
    this.header.title = title;
    this.header.backIcon = backIcon;
    this.header.rightIcon = rightIcon;
    this.header.backCLick = backClick;
    this.header.rightClick = rightClick;
  }



  /**后退*/
  public Back() {
    this.location.back();
  }




}
