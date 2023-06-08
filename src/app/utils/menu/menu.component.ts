import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from "../../welcome/welcome.component";
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('menuVisibilityCheckbox') isMenuVisible!: ElementRef;

  constructor(private menuService: MenuService) {
  }

  hideMenu(): void {
    this.setMenuVisibility(false);
  }
  ngOnInit(): void {
    this.menuService
      .menuVisibility
      .subscribe(isVisible => this.setMenuVisibility(isVisible));
  }

  private setMenuVisibility(isVisible: boolean): void {
    this.isMenuVisible.nativeElement.checked = isVisible;
  }

}
