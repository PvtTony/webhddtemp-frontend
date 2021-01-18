import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { FanStatus } from '../../vo';


@Component({
  selector: 'app-set-fan-status-dialog',
  templateUrl: './set-fan-status-dialog.component.html',
  styleUrls: ['./set-fan-status-dialog.component.css']
})
export class SetFanStatusDialogComponent implements OnInit {
  speed_control = new FormControl(this.data.speed, Validators.max(100));
  constructor(public dialogRef: MatDialogRef<SetFanStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FanStatus) { }

  
  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
