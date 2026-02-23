import {Component, input} from '@angular/core';
import {JobInfo} from './job.model';
import {LowerCasePipe} from '@angular/common';
import {DateRangeComponent} from '../../utils/date-range/date-range.component';
import {TechnologiesComponent} from '../../utils/technologies/technologies.component';
import {HighlightPipe} from '../../utils/highlight/highlight.pipe';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  standalone: true,
  imports: [LowerCasePipe, DateRangeComponent, TechnologiesComponent, HighlightPipe]
})
export class JobComponent {
  jobInfo = input.required<JobInfo>();
  searchQuery = input<string>('');
}
