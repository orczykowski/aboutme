import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // Signal-based state management (Angular 20 feature)
  menuVisibility = signal<boolean>(false);

  showMenu() {
    this.menuVisibility.set(true);
  }

  hideMenu() {
    this.menuVisibility.set(false);
  }

  toggleMenu() {
    this.menuVisibility.update(value => !value);
  }
}
