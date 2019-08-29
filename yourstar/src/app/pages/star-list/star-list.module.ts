import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { StarListPage } from './star-list';
import { StarListPageRoutingModule } from './star-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StarListPageRoutingModule
  ],
  declarations: [StarListPage],
})
export class StarListModule {}
