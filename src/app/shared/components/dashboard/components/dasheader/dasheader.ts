import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SidebarService } from '@core/services/sidebarService';
import { MenuProfile } from '@shared/components/menu-profile/menu-profile';
import { Notifications } from '@shared/components/notifications/notifications';

@Component({
  selector: 'app-dasheader',
  imports: [FormsModule, Notifications, MenuProfile],
  templateUrl: './dasheader.html',
  styleUrl: './dasheader.css'
})
export class Dasheader {
  constructor(private sidebarService: SidebarService) { }

  openNoti = false;
  openProfile = false;

  toggleNoti() {
    this.openNoti = !this.openNoti
  }

  toggleProfile() {
    this.openProfile = !this.openProfile
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }


}
