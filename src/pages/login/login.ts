import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IService } from '../../Utils/IService';
import { User } from '../../Model/User';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private _username: string;
  private _password: string;
  submitted = false;
  public user: User = new User();
  token: string = "";

  constructor(
    public navCtrl: NavController, public _service: IService,
    private http: Http, public alertCtrl: AlertController) {
    _service = new IService(http);
  }

  onSubmit() {
    console.log("Send form")
    this.submitted = true;
    this.Authenticate();
  }

  public Authenticate() {
    this._service.post(this.user.username, this.user.password).subscribe(
      response => localStorage.setItem("token", response.token),
      this.logError,
      () => {
        console.log('Authentication complete');
        this.navCtrl.setRoot(HomePage);
      }
    );
  }

  logError() {
    //  let alert = this.alertCtrl.create({
    //     title: 'Error de autenticación!',
    //     subTitle: 'Credenciales incorrectas!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    alert("Error de autenticación");
  }
}
