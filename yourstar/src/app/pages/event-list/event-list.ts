import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { EventData } from 'src/app/providers/event-data';

export interface Events {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
  styleUrls: ['./event-list.scss'],
})
export class EventListPage {
  events: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public eventData: EventData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.eventData.load().subscribe((data: any )=> {
        this.events = data.results;     
    });    
  }

  goToEventTwitter(event: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${event.twitter}`,
      '_blank'
    );
  }

  async openEventShare(event: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + event.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + event.twitter
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + event.twitter
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

  async openContact(event: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + event.name,
      buttons: [
        {
          text: `Email ( ${event.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + event.email);
          }
        },
        {
          text: `Call ( ${event.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + event.phone);
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
