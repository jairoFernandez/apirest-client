import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IService<T> {
  data: any;
  url: string;

  constructor(private http: Http, url: string) {
    this.data = null;
    this.url = url;
  }

  get(){
    return new Promise(resolve => {
      this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.results;
        resolve(this.data);
      })
    });
  }
}