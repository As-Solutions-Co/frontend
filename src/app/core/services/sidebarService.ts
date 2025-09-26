import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private open = true;

  isOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open;
  }
}
