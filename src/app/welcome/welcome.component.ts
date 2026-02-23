import {Component, computed, inject, signal} from '@angular/core';
import {MenuService} from '../utils/menu/menu.service';
import {JobRepository} from '../experience/job/job-repository.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: []
})
export class WelcomeComponent {
  private menuService = inject(MenuService);
  private jobRepository = inject(JobRepository);

  private readonly msInYear = 1000 * 60 * 60 * 24 * 365.25;
  private jobs = signal(this.jobRepository.findAll());

  experience = computed(() => {
    return Math.floor(
      this.jobs()
        .map(it => this.calculatePeriod(it.begin, it.end))
        .reduce((sum, current) => sum + current, 0)
      / this.msInYear
    );
  });

  showMenu(): void {
    this.menuService.showMenu();
  }

  private calculatePeriod(begin: Date, end: Date | undefined): number {
    if (!end) {
      return new Date().getTime() - begin.getTime();
    }
    return end.getTime() - begin.getTime();
  }
}