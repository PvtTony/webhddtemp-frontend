import { Component, OnInit } from '@angular/core';
import { DriveInfo } from 'src/app/shared/vo';

import { MonitoringService } from '../monitoring.service';

@Component({
  selector: 'app-drive-list',
  templateUrl: './drive-list.component.html',
  styleUrls: ['./drive-list.component.css']
})
export class DriveListComponent implements OnInit {

  constructor(private monitor: MonitoringService) { }
  drive_list: Array<DriveInfo> = [];
  ngOnInit(): void {
    this.getDriveList();
  }

  getDriveList(): void {
    this.monitor.getDrives().subscribe(result => {
      this.drive_list = result.data;
    });
  }

}
