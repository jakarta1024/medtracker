import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ConfigService {

  constructor(private http: Http) { }

  get(): Observable<string[]> {
      return this.http.get('/app/configuration.json').map((response) => response.json()).catch((error) => {
          let errMsg = error.message ? error.message : error.status;
          console.log(errMsg)
          return Observable.throw(errMsg)
      })
  }
}
