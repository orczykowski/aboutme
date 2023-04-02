import {Component, Input} from '@angular/core';
import {Technology} from "./definition.model";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  @Input()
  title: string = "technologies";

  @Input()
  technologies?: Technology[];

}
