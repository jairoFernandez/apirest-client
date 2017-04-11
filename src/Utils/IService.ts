import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IService {
  data: any;
  url: string;
  loginRoute: string = "/api/login_check";
  routeServer: string = "http://localhost:8000";

  constructor(private http: Http) {
  }

  post(username: string, password: string) {
    //var body = `_username=${username}&_password=${password}`;    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(this.routeServer + this.loginRoute, { '_username': username, '_password': password }, headers)
      .map(response => response.json());
      
  }
}