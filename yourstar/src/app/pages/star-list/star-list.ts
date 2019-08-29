import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { StarListData } from '../../providers/star-list-data';

@Component({
  selector: 'page-star-list',
  templateUrl: 'star-list.html',
  styleUrls: ['./star-list.scss'],
})
export class StarListPage {
  stars: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public starListData: StarListData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.starListData.load().subscribe((data: any) => {
      this.stars = data.results;
    });
  }

  goToEventTwitter(star: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${star.twitter}`,
      '_blank'
    );
  }

  async openEventShare(star: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + star.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + star.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + star.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(star: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + star.name,
      buttons: [
        {
          text: `Email ( ${star.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + star.email);
          }
        },
        {
          text: `Call ( ${star.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + star.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
