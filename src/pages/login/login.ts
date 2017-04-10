import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Iservice } from './Utils/Iservice';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [Iservice]
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public service: IService) {
  }

}
