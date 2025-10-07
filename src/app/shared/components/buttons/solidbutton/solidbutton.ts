import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solidbutton',
  standalone: true,
  imports: [],
  templateUrl: './solidbutton.html',
  styleUrl: './solidbutton.css'
})
export class Solidbutton {
  @Input() disabled = false;
}
