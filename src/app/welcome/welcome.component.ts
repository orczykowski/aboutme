import {Component, EventEmitter, Output} from '@angular/core';
import {MenuService} from "../utils/menu/menu.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private menuService: MenuService) {
  }

  showMenu() {
    this.menuService.showMenu();
  }
}
