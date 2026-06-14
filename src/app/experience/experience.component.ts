import {Component, computed, inject, linkedSignal, signal} from '@angular/core';
import {JobInfo} from './job/job.model';
import {JobRepository} from './job/job-repository.service';
import {JobComponent} from './job/job.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone: true,
  imports: [JobComponent, FormsModule]
})
export class ExperienceComponent {
  private jobRepository = inject(JobRepository);
  private allJobs = signal<JobInfo[]>(this.jobRepository.findAll());

  searchQuery = signal('');

  jobs = linkedSignal<string, JobInfo[]>({
    source: this.searchQuery,
    computation: (query) => {
      if (!query.trim()) {
        return this.allJobs();
      }
      const lowerQuery = query.toLowerCase().trim();
      return this.allJobs().filter(job => this.matchesJob(job, lowerQuery));
    }
  });

  totalJobs = computed(() => this.jobs().length);

  private readonly today = new Date();

  private timelineRange = computed(() => {
    const jobs = this.allJobs();
    const minTime = Math.min(...jobs.map(j => j.begin.getTime()));
    const maxTime = this.today.getTime();
    return {minTime, range: maxTime - minTime};
  });

  timelineJobs = computed(() => {
    const {minTime, range} = this.timelineRange();
    const sorted = [...this.allJobs()].sort((a, b) => a.begin.getTime() - b.begin.getTime());
    const pad = 5;
    return sorted.map((job, i) => ({
      job,
      position: pad + ((job.begin.getTime() - minTime) / range) * (100 - 2 * pad),
      above: i % 2 === 0,
      id: this.toJobId(job)
    }));
  });

  timelineYears = computed(() => {
    const {minTime, range} = this.timelineRange();
    const minYear = new Date(minTime).getFullYear();
    const maxYear = this.today.getFullYear();
    const pad = 5;
    const years: {year: number; position: number}[] = [];
    for (let y = Math.ceil(minYear / 2) * 2; y <= maxYear; y += 2) {
      const time = new Date(y, 0, 1).getTime();
      const rawPos = (time - minTime) / range;
      if (rawPos >= 0 && rawPos <= 1) {
        years.push({year: y, position: pad + rawPos * (100 - 2 * pad)});
      }
    }
    return years;
  });

  toJobId(job: JobInfo): string {
    return 'job-' + job.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  isInResults(job: JobInfo): boolean {
    return this.jobs().some(j => j.companyName === job.companyName && j.begin.getTime() === job.begin.getTime());
  }

  nodeTitle(job: JobInfo): string {
    const end = job.end ? job.end.getFullYear().toString() : 'present';
    return `${job.companyName} (${job.begin.getFullYear()} – ${end})`;
  }

  scrollToJob(job: JobInfo): void {
    if (this.searchQuery().trim() && !this.isInResults(job)) return;
    document.getElementById(this.toJobId(job))?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  private matchesJob(job: JobInfo, query: string): boolean {
    return job.companyName.toLowerCase().includes(query)
      || job.position.toLowerCase().includes(query)
      || (job.description?.toLowerCase().includes(query) ?? false)
      || (job.systemArchitecture?.toLowerCase().includes(query) ?? false)
      || job.mainTechnologies.some(t => t.toLowerCase().includes(query))
      || (job.otherTechnologies?.some(t => t.toLowerCase().includes(query)) ?? false)
      || job.methodologies.some(m => m.toLowerCase().includes(query))
      || job.applicationArchitectures.some(a => a.toLowerCase().includes(query))
      || job.mainResponsibilities.some(r => r.toLowerCase().includes(query))
      || (job.additionalResponsibilities?.some(r => r.toLowerCase().includes(query)) ?? false);
  }
}
