import { Menutoggle } from './../menutoggle/menutoggle';
import { Softbutton } from './../buttons/softbutton/softbutton';
import { Component } from '@angular/core';
import { Box } from '../box/box';
import { Solidbutton } from '../buttons/solidbutton/solidbutton';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Box, Solidbutton, Softbutton, Menutoggle, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) { }

  get currentRoute(): string {
    return this.router.url
  }

}
