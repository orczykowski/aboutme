import {Component, input} from '@angular/core';
import {ToolDefinition} from "../tool-model";
import {RatingComponent} from "../../utils/rating/rating.component";

@Component({
  selector: 'app-grouped-tools',
  templateUrl: './grouped-tools.component.html',
  styleUrls: ['./grouped-tools.component.css'],
  standalone: true,
  imports: [RatingComponent]
})
export class GroupedToolsComponent {

  title = input<string>("tools")
  tools = input<ToolDefinition[]>()
}

