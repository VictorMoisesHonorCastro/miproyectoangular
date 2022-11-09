import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'miproyecto';
  week:any=[
    "L",
    "M",
    "M",
    "F",
    "V",
    "S",
    "D"
  ];
  monthSelect:any=[];
  dateSelect: any;

  ngOnInit():void{
    this.getDaysFromDate(9 , 2022)
  }
  getDaysFromDate(month: number, year: number){
    const startDate=moment.utc(`${year}/${month}/01`)
    const endDate=startDate.clone().endOf('month')
    this.dateSelect= startDate;
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);
    const arraysDays=Object.keys([...Array(numberDays)]).map((a:any)=>{
      a=parseInt(a)+1;
      const dayObject=moment(`${year}-${month}-${a}`);
      return {
        name:dayObject.format("dddd"),
        value:a,
        indexWeek:dayObject.isoWeekday()
      };
    });
    this.monthSelect=arraysDays;
  }
}
