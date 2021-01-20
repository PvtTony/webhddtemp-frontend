import { Component, Input, OnInit } from '@angular/core';
import { DriveInfo, DriveTemp, DriveInfoTableRow } from 'src/app/shared/vo';
import { MonitoringService } from '../monitoring.service';

@Component({
  selector: 'app-drive-temp-detail',
  templateUrl: './drive-temp-detail.component.html',
  styleUrls: ['./drive-temp-detail.component.css']
})
export class DriveTempDetailComponent implements OnInit {
  @Input() drive!: DriveInfo;
  drive_temp!: DriveTemp;

  drive_info_table_source: Array<DriveInfoTableRow> = [];
  displayedColumns: string[] = ['name', 'value'];

  charts_options: any;

  constructor(private monitor: MonitoringService) { }

  ngOnInit(): void {
    this.getDriveTemp();
  }

  getDriveTemp(): void {
    if (this.drive == null) {
      return;
    }
    
    this.monitor.getDriveTempDetail(this.drive.device.name).subscribe(detail => {
      this.drive_temp = detail.data;
      this.getDriveInfoTableData(this.drive_temp);
      this.getTempHistoryChartsOptions(this.drive_temp);
    });
  }

  getDriveInfoTableData(drive_temp: DriveTemp): void {
    this.drive_info_table_source = [
      { name: "Model Family", value: `${this.drive.model_family}` },
      { name: "Device Model", value: `${this.drive.model_name}` },
      { name: "Serial Number", value: `${this.drive.serial_number}` },
      { name: "Firmware Version", value: `${this.drive.firmware_version}` },
      { name: "User Capacity", value: `${this.drive.user_capacity.bytes} Bytes` },
      { name: "Sector Sizes", value: `${this.drive.logical_block_size} bytes logical, ${this.drive.physical_block_size} bytes physical` },
      { name: "Rotation Rate", value: `${this.drive.rotation_rate}` },
      { name: "Protocol", value: `${this.drive.device.protocol}`},
      { name: "Current Temperature", value: `${drive_temp.temp.current} °C` },
      { name: "Lifetime Temp Range", value: `${drive_temp.temp.lifetime_min}~${drive_temp.temp.lifetime_max} °C` },
      { name: "Powercycle Temp Range", value: `${drive_temp.temp.power_cycle_min}~${drive_temp.temp.power_cycle_max} °C` }
    ];
  }

  getTempHistoryChartsOptions(drive_temp: DriveTemp): void {
    const xAxisData = [];
    const tempData = [];
    const dateTimeFormatter = new Intl.DateTimeFormat('zh-CN',
      { hour: 'numeric', minute: 'numeric', hour12: false });
    for (let hist_temp of drive_temp.log.history) {
      let date = new Date(hist_temp.est * 1000);
      xAxisData.push(dateTimeFormatter.format(date));
      tempData.push(hist_temp.temp);
    }
    this.charts_options = {
      title: {
        text: "Drive Temp History",
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },
      dataZoom: [
        {
          show: true,
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
        }
      ],
      xAxis: {
        data: xAxisData,
        type: 'category',
        name: 'Time'
      },
      yAxis: {
        name: 'Temp °C',
        type: 'value'
      },
      series: [{
        name: "Temp (°C)",
        data: tempData,
        type: 'line',
        hoverAnimation: false
      }]
    };
  }

}
