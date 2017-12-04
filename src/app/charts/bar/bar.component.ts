import { Component } from '@angular/core';

import { single, multi, buildData } from '../../shared/chartData';
import {build$} from "protractor/built/element";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

  single: any[];
  multi: any[];
  buildData: any[];
  buildMulti:any[] = [
    {
      name: 'Project1',
      series: [
        {
          name: 'Sucess',
          value: 40
        },
        {
          name: 'Failures',
          value: 36
        },
        {
          name: 'Total',
          value: 76
        }
      ]},
    {
      name: 'Project2',
      series: [
        {
          name: 'Sucess',
          value: 34
        },
        {
          name: 'Failures',
          value: 20
        },
        {
          name: 'Total',
          value: 54
        }
      ]
    }];

  buildSingle:any[] = [
        {
          name: 'Sucess',
          value: 40
        },
        {
          name: 'Failures',
          value: 36
        },
        {
          name: 'Total',
          value: 76
        }
      ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Project';
  showYAxisLabel = true;
  yAxisLabel = 'No. of builds';
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;

  colorScheme = {
    domain: [
      'green', 'red', '#4cc3d9'
    ]
  };
  schemeType = 'ordinal';

  constructor() {
    Object.assign(this, {
      single,
      multi,
      buildData
    });
    /*var successCount=0;
    var failureCount=0;
    for(i=0;i<buildData.length;i++){
      var singleObj=buildData[i];
      if(singleObj['result']==="SUCCESS"){
        successCount++;
      }else if(singleObj['result']==="FAILURE"){
        failureCount++;
      }
    };*/
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

}
