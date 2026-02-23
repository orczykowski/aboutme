import {Component, input} from '@angular/core';
import {Technology} from './definition.model';
import {LowerCasePipe} from '@angular/common';
import {HighlightPipe} from '../highlight/highlight.pipe';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
  standalone: true,
  imports: [LowerCasePipe, HighlightPipe]
})
export class TechnologiesComponent {
  title = input<string>();
  technologies = input<Technology[]>();
  searchQuery = input<string>('');
}
