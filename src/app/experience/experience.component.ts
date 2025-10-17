import {Component, computed, inject, linkedSignal, signal} from '@angular/core';
import {JobInfo} from "./job/job.model";
import {JobRepository} from "./job/job-repository.service";
import {JobComponent} from './job/job.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [JobComponent]
})
export class ExperienceComponent {
  private jobRepository = inject(JobRepository);

  private allJobs = signal<JobInfo[]>(this.jobRepository.findAll());

  private filterYear = signal<number | null>(null);

  jobs = linkedSignal<number | null, JobInfo[]>({
    source: this.filterYear,
    computation: (filterYear) => {
      if (filterYear === null) {
        return this.allJobs();
      }
      return this.allJobs().filter(job =>
        job.begin.getFullYear() <= filterYear &&
        (!job.end || job.end.getFullYear() >= filterYear)
      );
    }
  });

  totalJobs = computed(() => this.jobs().length);

  filterByYear(year: number | null): void {
    this.filterYear.set(year);
  }
}
