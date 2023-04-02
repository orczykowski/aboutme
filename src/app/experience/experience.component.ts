import {Component, OnInit} from '@angular/core';
import {JobInfo} from "./job/job.model";
import {JobRepository} from "./job/job-repository.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  jobs: JobInfo[];

  constructor(private jobRepository: JobRepository) {
    this.jobs = this.jobRepository.findAll();
  }

}
