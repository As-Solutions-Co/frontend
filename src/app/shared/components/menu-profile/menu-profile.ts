import { Router } from '@angular/router';
import { Component, NgZone } from '@angular/core';
import { Outlinebutton } from "../buttons/outlinebutton/outlinebutton";
import { AuthAWS } from '@core/services/authaws';
import { AlertService } from '@core/services/alertService';

@Component({
  selector: 'app-menu-profile',
  imports: [Outlinebutton],
  templateUrl: './menu-profile.html',
  styleUrl: './menu-profile.css'
})
export class MenuProfile {

  constructor(private auth: AuthAWS, private alertService: AlertService, private router: Router, private zone: NgZone) { }

  async onlogOut() {
    try {
      await this.auth.handleLogout();
      this.alertService.show('success', 'logging out', null);
      setTimeout(() => {
        this.zone.run(() => {
          this.router.navigate(['/']);
        })
      }, 500)

    } catch (error: any) {
      this.alertService.show('error', 'Session could not be closed', error.message)
    }
  }
}
