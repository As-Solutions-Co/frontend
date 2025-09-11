import { Component } from '@angular/core';
import { Itemdash } from "../itemdash/itemdash";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [Itemdash],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
