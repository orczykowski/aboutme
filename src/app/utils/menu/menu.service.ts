import {ElementRef, EventEmitter, Injectable, Output, ViewChild} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  @Output() menuVisibility = new EventEmitter<boolean>();

  showMenu() {
    this.menuVisibility.emit(true);
  }

  hideMenu() {
    this.menuVisibility.emit(false);
  }
}
