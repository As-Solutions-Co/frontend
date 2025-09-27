import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertService, AlertType } from '@core/services/alertService';

@Component({
  selector: 'app-alert',
  imports: [CommonModule, FormsModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  type: AlertType = 'info';
  message: string = '';

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alert$.subscribe((aler) => {
      this.type = aler.type;
      this.message = aler.message;

      setTimeout(() => {
        this.message = '';
      }, 5000);
    })
  }


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
