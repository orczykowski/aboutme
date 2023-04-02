import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent {

  @Input()
  dateFrom?: Date

  @Input()
  dateTo?: Date

}
