import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuVisibilityCheckbox') isMenuVisible!: ElementRef;
  googleDocsCvLink ="https://docs.google.com/document/d/1QV6UIbGRE4uAxSeMLk8Pml2d9Esw4wX6J-UcEPIkEys/edit?usp=sharing";
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
