import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  @Input() message!: string;
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
}
