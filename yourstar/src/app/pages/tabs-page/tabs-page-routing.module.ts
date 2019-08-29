import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../event-list/event-list.module#EventListModule'
          },
          {
            path: 'event-details/:eventId',
            loadChildren: '../event-detail/event-detail.module#EventDetailModule'
          }
        ]
      },
      {
        path: 'stars',
        children: [
          {
            path: '',
            loadChildren: '../star-list/star-list.module#StarListModule'
          },
          {
            path: 'star-details/:starId',
            loadChildren: '../star-detail/star-detail.module#StarDetailModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/events',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

