import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarDetailData } from '../../providers/star-detail-data';
import { Chart } from 'chart.js';
import { StarRating } from 'ionic4-star-rating';
import { PostPage } from '../post/post';


@Component({
  selector: 'page-star-detail',
  templateUrl: 'star-detail.html',
  styleUrls: ['./star-detail.scss'],
})
export class StarDetailPage {
  @ViewChild("raderChart") raderChart: ElementRef;
  @ViewChild('rating') rating : any;

  star: any;  
  barChart: Chart;
  starRating: StarRating;
  postPage: PostPage;
  scores: Array<any> = [];
  score_names: Array<any> = [];
  score_list: Array<any> = [];
  
  constructor(
    private dataProvider : StarDetailData,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.scores = [];
    this.score_list = [];
    this.score_names = [];

    const starId = this.route.snapshot.paramMap.get('starId');

    this.dataProvider.load(starId).subscribe((data: any) => {
      this.star = data;
      this.score_list = data.score_list;

      for (let score of this.score_list){
        this.scores.push(score.score);
        this.score_names.push(score.score_name)
      }

      this.initChart();
    });

    
  }

  goToPost(star: any) {
    this.router.navigate(["../post"], {relativeTo: this.route, queryParams: star });
    // this.router.navigate(["../post"], type);
  }
    
  initChart(){
    this.barChart = new Chart(this.raderChart.nativeElement, {
      type: 'radar',
      data: {
        labels: this.score_names,
        datasets: [{
          label: '# of card in use',
          data: this.scores,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }],
      },
      options: {
        scales: {
          display : false,
          ticks: {
            min: 0,
            max: 100,
            beginAtZero:true
          },
          xAxes: [{
            ticks: {
              min: 0,
              max: 100,
              beginAtZero:true
            },
            scaleLabel: {
              display: false
            },
            stacked: true
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 100,
              beginAtZero:true
            },
            stacked: true,
          }],
        },
        responsive: true
      }
    });
  }
}
