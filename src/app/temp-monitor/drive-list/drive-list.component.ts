import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DriveInfo } from 'src/app/shared/vo';

import { MonitoringService } from '../monitoring.service';

@Component({
  selector: 'app-drive-list',
  templateUrl: './drive-list.component.html',
  styleUrls: ['./drive-list.component.css']
})
export class DriveListComponent implements OnInit {

  constructor(private monitor: MonitoringService, private snackBar: MatSnackBar) { }
  drive_list: Array<DriveInfo> = [];
  ngOnInit(): void {
    this.getDriveList();
  }

  getDriveList(): void {
    this.monitor.getDrives().subscribe(result => {
      this.drive_list = result.data;
    }, error => {
      this.snackBar.open('Unable to get drives. Please try again.', 'OK',
        { duration: 2000 });
    });
  }

}
