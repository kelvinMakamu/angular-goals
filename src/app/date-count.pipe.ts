import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date            = new Date();
    let todayWithoutTime:any  = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference        = Math.abs(value - todayWithoutTime);
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter           = dateDifferenceSeconds/86400;

    if(dateCounter >= 1 && value > todayWithoutTime){
      return dateCounter;
    }else{
      return 0;
    }

  }

}
