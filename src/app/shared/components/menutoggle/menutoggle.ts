import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Softbutton } from "../buttons/softbutton/softbutton";

@Component({
  selector: 'app-menutoggle',
  standalone: true,
  imports: [RouterLink, CommonModule, Softbutton],
  templateUrl: './menutoggle.html',
  styleUrl: './menutoggle.css'
})
export class Menutoggle {

  constructor(private router: Router) { }

  get currentRoute(): string {
    return this.router.url
  }

  isMenuOpen = false;

  onMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
