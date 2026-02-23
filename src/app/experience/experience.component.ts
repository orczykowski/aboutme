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
