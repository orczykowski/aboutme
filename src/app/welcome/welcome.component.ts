import {Component, OnInit} from '@angular/core';
import {MenuService} from "../utils/menu/menu.service";
import {JobRepository} from "../experience/job/job-repository.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private msInYear: number = 1000 * 60 * 60 * 24 * 365.25;
  experience = 13;

  constructor(private menuService: MenuService,
              private jobRepository: JobRepository) {
  }

  ngOnInit(): void {
    this.experience = Math.floor(this.jobRepository.findAll()
      .map(it => this.calculatePeriod(it.begin, it.end))
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) / this.msInYear);
  }


  showMenu() {
    this.menuService.showMenu();
  }

  private calculatePeriod(begin: Date, end: Date | undefined) {
    if (!end) {
      return new Date().getTime() - begin.getTime();
    }
    return end.getTime() - begin.getTime();
  }
}
