import {Component, input} from '@angular/core';
import {ToolDefinition} from "../tool-model";


@Component({
  selector: 'app-grouped-tools',
  templateUrl: './grouped-tools.component.html',
  styleUrls: ['./grouped-tools.component.css']
})
export class GroupedToolsComponent {

  title = input<string>("tools")
  tools = input<ToolDefinition[]>()
}

