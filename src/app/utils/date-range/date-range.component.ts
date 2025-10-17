import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  standalone: true,
  imports: [DatePipe]
})
export class DateRangeComponent {


  dateFrom = input<Date>()

  dateTo = input<Date>()
}
