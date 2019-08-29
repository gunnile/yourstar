import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarListPage } from './star-list';
const routes: Routes = [
  {
    path: '',
    component: StarListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarListPageRoutingModule {}
