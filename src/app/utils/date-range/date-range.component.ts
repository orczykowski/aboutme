import {Component, input} from '@angular/core';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent {


  dateFrom = input<Date>()

  dateTo = input<Date>()
}
