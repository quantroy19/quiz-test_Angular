import { Observable } from 'rxjs';
import { SpectrumStatisticService } from './../../../services/spectrum-statistic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private spectrumStatic: SpectrumStatisticService) {}
  ngOnInit(): void {
    this.getDataStatic();
  }
  public arrayData: Array<any> = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any;
  getDataStatic() {
    this.spectrumStatic.getDataSpectrumStatistics().subscribe((data) => {
      this.arrayData = Object.values(data);
      this.arrayData.shift();
      this.barChartData = [
        { data: this.arrayData, label: 'Score (times)' },
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ];
    });
  }
}
