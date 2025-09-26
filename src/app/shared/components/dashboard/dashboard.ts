import { CommonModule } from '@angular/common';
import { Sidebar } from './components/sidebar/sidebar';
import { Component } from '@angular/core';
import { Dasheader } from "./components/dasheader/dasheader";
import { FormsModule } from '@angular/forms';
import { SidebarService } from '@core/services/sidebarService';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Dasheader, FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

  constructor(public sidebarService: SidebarService) { };

}
