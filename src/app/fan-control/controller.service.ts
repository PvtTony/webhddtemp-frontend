import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

import { FanStatus, ResponsePack } from '../shared/vo'
import { server_url, api_prefix, httpOptions, handleError } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private httpClient: HttpClient, private socket: Socket) { }

  // private get_drives_url: string = `${this.target_host}/drive`;

  getFanStatus(): Observable<ResponsePack<FanStatus>> {
    const url = `${server_url}${api_prefix}/fan`;
    return this.httpClient.get<ResponsePack<FanStatus>>(url)
      .pipe(catchError(handleError));
  }

  setFanStatus(settings: FanStatus): Observable<any> {
    const url = `${server_url}${api_prefix}/fan`;
    return this.httpClient.put(url, settings, httpOptions)
      .pipe(
        catchError(handleError)
      );
  }

  getFanStatusSocket(): Observable<FanStatus> {
    return this.socket
      .fromEvent<FanStatus>('fan_status_update')
      .pipe(catchError(handleError));
  }

}
