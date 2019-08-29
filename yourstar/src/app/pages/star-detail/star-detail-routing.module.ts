import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarDetailPage } from './star-detail';
import { PostPage } from '../post/post';

const routes: Routes = [
  {path: '', component: StarDetailPage},
  {path: 'post', component: PostPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarDetailPageRoutingModule { }
