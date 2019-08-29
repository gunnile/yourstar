import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDetailData } from '../../providers/event-detail-data';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
  styleUrls: ['./event-detail.scss'],
})
export class EventDetailPage {
  event: any;
  star_list: any[];

  constructor(
    private dataProvider: EventDetailData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    const eventId = this.route.snapshot.paramMap.get('eventId');

    this.dataProvider.load(eventId).subscribe((data: any) => {    
      this.event = data;  
      this.star_list = data.star_list;
    });
  }
}
