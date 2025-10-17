import {Component, effect, ElementRef, inject, viewChild} from '@angular/core';
import {MenuService} from "./menu.service";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class MenuComponent {
  // Signal-based viewChild query (Angular 20 feature)
  isMenuVisible = viewChild<ElementRef>('menuVisibilityCheckbox');

  googleDocsCvLink ="https://docs.google.com/document/d/1QV6UIbGRE4uAxSeMLk8Pml2d9Esw4wX6J-UcEPIkEys/edit?usp=sharing";

  private menuService = inject(MenuService);

  constructor() {
    effect(() => {
      const checkbox = this.isMenuVisible();
      const isVisible = this.menuService.menuVisibility();
      if (checkbox) {
        checkbox.nativeElement.checked = isVisible;
      }
    });
  }

  hideMenu(): void {
    const checkbox = this.isMenuVisible();
    if (checkbox) {
      checkbox.nativeElement.checked = false;
    }
    this.menuService.hideMenu();
  }
}
