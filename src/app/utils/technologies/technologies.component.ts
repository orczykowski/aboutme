import {Component, input} from '@angular/core';
import {Technology} from "./definition.model";
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  standalone: true,
  imports: [LowerCasePipe]
})
export class TechnologiesComponent {

  title = input<string>();

  technologies = input<Technology[]>();

}
