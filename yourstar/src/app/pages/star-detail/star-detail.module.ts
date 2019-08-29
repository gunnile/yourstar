import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StarDetailPage } from './star-detail';
import { StarDetailPageRoutingModule } from './star-detail-routing.module';
import { ChartsModule } from 'ng2-charts';
import { StarRating } from 'ionic4-star-rating';
import { PostPageRoutingModule } from '../post/post-routing.module';
import { PostPage } from '../post/post';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ChartsModule,
    StarDetailPageRoutingModule,
    PostPageRoutingModule
  ],
  exports:[
    ChartsModule,
    StarRating,
    PostPage
  ],
  declarations: [
    StarDetailPage,
    StarRating,
    PostPage
  ]
})
export class StarDetailModule {}
