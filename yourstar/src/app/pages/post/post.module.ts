import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PostPage } from './post';
import { PostPageRoutingModule } from './post-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    PostPageRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    ChartsModule,
    PostPage
  ],
  declarations: [PostPage],
  bootstrap: [PostPage],
})
export class PostModule {}
