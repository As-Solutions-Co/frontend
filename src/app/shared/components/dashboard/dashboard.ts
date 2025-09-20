import { Sidebar } from './components/sidebar/sidebar';
import { Component } from '@angular/core';
import { Dasheader } from "./components/dasheader/dasheader";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Dasheader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
