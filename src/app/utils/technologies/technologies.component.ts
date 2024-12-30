import {Component, input} from '@angular/core';
import {Technology} from "./definition.model";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  title = input<string>();

  technologies = input<Technology[]>();

}
