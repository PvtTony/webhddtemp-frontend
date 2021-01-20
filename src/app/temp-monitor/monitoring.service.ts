import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponsePack, DriveTemp, DriveInfo } from '../shared/vo';
import { api_prefix, server_url } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private httpClient: HttpClient) { }

  getDrives(): Observable<ResponsePack<Array<DriveInfo>>> {
    const url = `${server_url}${api_prefix}/drives`;
    return this.httpClient.get<ResponsePack<Array<DriveInfo>>>(url);
  }

  getDriveTempDetail(drive_name: string): Observable<ResponsePack<DriveTemp>> {
    const url = `${server_url}${api_prefix}/temp`;
    drive_name = drive_name.trim();
    const options = drive_name ?
      { params: new HttpParams().set('drive_name', drive_name) } : {};
    return this.httpClient.get<ResponsePack<DriveTemp>>(url, options);
  }
}
