import {Component, ElementRef, inject, viewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuComponent} from './utils/menu/menu.component';
import {SeoService} from './utils/seo/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, MenuComponent]
})
export class AppComponent {
  isMenuVisible = viewChild<ElementRef>('menuVisibilityCheckbox');

  constructor() {
    inject(SeoService).init();
  }

  hideMenu(): void {
    const checkbox = this.isMenuVisible();
    if (checkbox) {
      checkbox.nativeElement.checked = false;
    }
  }

}
