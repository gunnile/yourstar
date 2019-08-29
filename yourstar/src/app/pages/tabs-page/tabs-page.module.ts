import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { StarListModule } from '../star-list/star-list.module';
import { EventListModule } from '../event-list/event-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    StarListModule,
    EventListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
