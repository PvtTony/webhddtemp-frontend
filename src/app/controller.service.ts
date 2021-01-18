import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

import { FanStatus, ResponsePack } from './vo'

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private httpClient: HttpClient, private socket: Socket) { }
  private target_host: string = 'http://127.0.0.1:5000';

  // private get_drives_url: string = `${this.target_host}/drive`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getFanStatus(): Observable<ResponsePack<FanStatus>> {
    const url = `${this.target_host}/fan`;
    return this.httpClient.get<ResponsePack<FanStatus>>(url);
    // .pipe(tap(_ => { console.log(_)}));
  }

  setFanStatus(settings: FanStatus): Observable<any> {
    const url = `${this.target_host}/fan`;
    return this.httpClient.put(url, settings, this.httpOptions)
      .pipe(
        tap(_ => console.log(_))
      );
  }

  getFanStatusSocket(): Observable<FanStatus> {
    return this.socket
      .fromEvent<FanStatus>('fan_status_update');
  }

}
