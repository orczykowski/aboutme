import {Component, Input} from '@angular/core';
import {ToolDefinition} from "../tool-model";


@Component({
  selector: 'app-grouped-tools',
  templateUrl: './grouped-tools.component.html',
  styleUrls: ['./grouped-tools.component.css']
})
export class GroupedToolsComponent {
  @Input()
  title: string = "tools"

  @Input()
  tools: ToolDefinition[] = []
}

