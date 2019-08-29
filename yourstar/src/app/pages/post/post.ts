import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

import { PopoverController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import * as Chart from 'chart.js';
import { TypeData } from 'src/app/providers/type-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
  styleUrls: ['./post.scss'],
})
export class PostPage {
  conferenceDate = '2047-05-17';
  elementRef: ElementRef;
  barChart: Chart;
  typeId: any;
  scoreNames: any[];
  submitted: boolean;
  supportMessage: string;
  star: any;
  
  constructor(
    private route: ActivatedRoute,
    private dataProvider : TypeData,
    public toastCtrl: ToastController
  ){}

  async ionViewWillEnter(){
    this.typeId = this.route.snapshot.queryParams.type;
    this.star = this.route.snapshot.queryParams;

    this.dataProvider.load(this.typeId).subscribe((data: any[]) => {
      this.scoreNames = data;
    });

    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
  }
  
  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }
  
  

}
