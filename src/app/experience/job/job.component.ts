import {Component, input} from '@angular/core';
import {JobInfo} from "./job.model";

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  jobInfo = input.required<JobInfo>()
}
