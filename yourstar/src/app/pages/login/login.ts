import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  facebookUserData = null;

  constructor(
    public userData: UserData,
    public router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    public menu: MenuController,
  ) { }

  ionViewWillEnter() {
    // this.storage.get('ion_did_tutorial').then(res => {
    //   if (res === true) {
    //     this.router.navigateByUrl('/app/tabs/events');
    //   }
    // });

    this.menu.enable(false);
  }

  loginWithFB(){
    this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
      this.fb.api('me?fields=id,name,email,.first_name,picture.width(720).height(720).as(picture_large)', []). then(profile =>{
        this.facebookUserData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      
        alert(this.facebookUserData.email);
        
      })
    }) 
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/events');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
