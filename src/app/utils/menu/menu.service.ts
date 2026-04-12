import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuVisibility = signal<boolean>(false);

  showMenu(): void {
    this.menuVisibility.set(true);
  }

  hideMenu(): void {
    this.menuVisibility.set(false);
  }
}
