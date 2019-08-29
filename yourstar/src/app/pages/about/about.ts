import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import * as Chart from 'chart.js';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  elementRef: ElementRef;
  barChart: Chart;
  
  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  ionViewWillEnter(){

  }
  
  

}
