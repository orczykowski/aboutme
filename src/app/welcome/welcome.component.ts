import {Component, computed, inject, signal} from '@angular/core';
import {MenuService} from "../utils/menu/menu.service";
import {JobRepository} from "../experience/job/job-repository.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: []
})
export class WelcomeComponent {
  // Inject dependencies using Angular 20 inject() function
  private menuService = inject(MenuService);
  private jobRepository = inject(JobRepository);

  private readonly msInYear = 1000 * 60 * 60 * 24 * 365.25;

  // Signal for jobs data (Angular 20 feature)
  private jobs = signal(this.jobRepository.findAll());

  // Computed signal for total experience (Angular 20 feature)
  // Automatically recalculates when jobs signal changes
  experience = computed(() => {
    return Math.floor(
      this.jobs()
        .map(it => this.calculatePeriod(it.begin, it.end))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        / this.msInYear
    );
  });

  showMenu() {
    this.menuService.showMenu();
  }

  private calculatePeriod(begin: Date, end: Date | undefined): number {
    if (!end) {
      return new Date().getTime() - begin.getTime();
    }
    return end.getTime() - begin.getTime();
  }
}
