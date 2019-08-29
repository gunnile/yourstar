import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StarListPage } from './star-list';
import { StarListData } from '../../providers/star-list-data';

const starDataSub = {};

describe('StarListPage', () => {
  let fixture, app;
  beforeEach(async(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    TestBed.configureTestingModule({
      declarations: [StarListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: InAppBrowser, useValue: iabSpy },
        { provide: Router, useValue: routerSpy },
        { provide: StarListData, useValue: starDataSub }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(StarListPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the star list page', () => {
    expect(app).toBeTruthy();
  });
});
