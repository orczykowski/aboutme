import {Component, computed, input, output} from '@angular/core';
import {JobInfo} from '../job/job.model';

const BAR_COLORS = ['color-green', 'color-blue', 'color-orange', 'color-teal', 'color-purple'];

interface TimelineEntry {
  job: JobInfo;
  startPosition: number;
  width: number;
  above: boolean;
  id: string;
  dimmed: boolean;
  active: boolean;
  colorClass: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  standalone: true,
})
export class TimelineComponent {
  jobs = input.required<JobInfo[]>();
  filteredJobs = input<JobInfo[]>([]);
  searchQuery = input<string>('');

  jobClicked = output<JobInfo>();

  private readonly today = new Date();

  private timelineRange = computed(() => {
    const jobs = this.jobs();
    const minTime = Math.min(...jobs.map(j => j.begin.getTime()));
    const maxTime = this.today.getTime();
    return {minTime, range: maxTime - minTime};
  });

  timelineEntries = computed((): TimelineEntry[] => {
    const {minTime, range} = this.timelineRange();
    const pad = 5;
    const todayTime = this.today.getTime();
    const query = this.searchQuery().trim();
    const filtered = this.filteredJobs();

    const sorted = [...this.jobs()].sort((a, b) => a.begin.getTime() - b.begin.getTime());
    const colorMap = new Map<string, string>();
    let colorCounter = 0;

    return sorted.map((job, i) => {
      const startPos = pad + ((job.begin.getTime() - minTime) / range) * (100 - 2 * pad);
      const endTime = job.end ? job.end.getTime() : todayTime;
      const endPos = pad + ((endTime - minTime) / range) * (100 - 2 * pad);
      const inResults = !query || filtered.some(
        j => j.companyName === job.companyName && j.begin.getTime() === job.begin.getTime()
      );

      const groupKey = this.companyGroupKey(job.companyName);
      if (!colorMap.has(groupKey)) {
        colorMap.set(groupKey, BAR_COLORS[colorCounter % BAR_COLORS.length]);
        colorCounter++;
      }

      return {
        job,
        startPosition: startPos,
        width: Math.max(endPos - startPos, 0.5),
        above: i % 2 === 0,
        id: this.toId(job),
        dimmed: !!query && !inResults,
        active: !!query && inResults,
        colorClass: colorMap.get(groupKey)!,
      };
    });
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

  private toId(job: JobInfo): string {
    return 'job-' + job.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  private companyGroupKey(companyName: string): string {
    const parts = companyName.split('/');
    return parts[parts.length - 1].trim().toLowerCase();
  }

  nodeTitle(entry: TimelineEntry): string {
    const end = entry.job.end ? entry.job.end.getFullYear().toString() : 'present';
    return `${entry.job.companyName} (${entry.job.begin.getFullYear()} – ${end})`;
  }

  onBarClick(entry: TimelineEntry): void {
    if (entry.dimmed) return;
    this.jobClicked.emit(entry.job);
  }
}
