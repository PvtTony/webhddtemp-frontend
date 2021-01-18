import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SetFanStatusDialogComponent } from '../set-fan-status-dialog/set-fan-status-dialog.component';
import { ControllerService } from '../controller.service';
import { FanStatus } from '../../vo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fan-status',
  templateUrl: './fan-status.component.html',
  styleUrls: ['./fan-status.component.css']
})
export class FanStatusComponent implements OnInit {

  constructor(private controller: ControllerService, public dialog: MatDialog,
    private snackBar: MatSnackBar) { }
  fanStatus!: FanStatus;
  ngOnInit(): void {
    this.setFanStatusSocket();
  }

  getFanStatus(): void {
    this.controller.getFanStatus().subscribe(resp_pack => this.fanStatus = resp_pack.data);
  }

  setFanStatusSocket(): void {
    this.controller.getFanStatusSocket().subscribe(status => this.fanStatus = status);
  }

  setFanStatus(settings: FanStatus): void {
    this.controller.setFanStatus(settings).subscribe(() => {
      // Speed limit
      if (settings.speed > 100) {
        return;
      }
      this.snackBar.open(`Speed has been set to ${settings.speed}%.`, 'OK',
        { duration: 1000 });
    });
  }

  openSetFanStatusDialog(): void {
    const dialogRef: MatDialogRef<SetFanStatusDialogComponent, FanStatus> = this.dialog.
      open(SetFanStatusDialogComponent, { data: this.fanStatus });
    dialogRef.afterClosed().subscribe(result => {
      // check result
      if (result === undefined) {
        return;
      }
      this.setFanStatus(result);
    });
  }

}
