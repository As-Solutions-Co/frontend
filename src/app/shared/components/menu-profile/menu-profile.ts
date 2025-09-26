import { Component } from '@angular/core';
import { Outlinebutton } from "../buttons/outlinebutton/outlinebutton";
import { Auth } from '@core/services/auth';

@Component({
  selector: 'app-menu-profile',
  imports: [Outlinebutton],
  templateUrl: './menu-profile.html',
  styleUrl: './menu-profile.css'
})
export class MenuProfile {

  constructor(private authService: Auth) { }

  logout() {
    this.authService.logOut();
  }
}
