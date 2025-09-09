import { Menutoggle } from './../menutoggle/menutoggle';
import { Softbutton } from './../buttons/softbutton/softbutton';
import { Component } from '@angular/core';
import { Box } from '../box/box';
import { Solidbutton } from '../buttons/solidbutton/solidbutton';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Box, Solidbutton, Softbutton, Menutoggle],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
