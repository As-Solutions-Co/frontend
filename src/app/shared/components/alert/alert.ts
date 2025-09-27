import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule, FormsModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  type: string = 'warning';
  message: string = 'hola';
  icon: string = '';

  icons(): string {
    switch (this.type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  }

}
