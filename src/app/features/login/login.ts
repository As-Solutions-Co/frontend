import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Card } from './../../shared/components/card/card';
import { Footer } from '@shared/components/footer/footer';
import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Alert } from "@shared/components/alert/alert";
import { AlertService } from '@core/services/alertService';
import { AuthAWS } from '@core/services/authaws';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, Footer, Card, FormsModule, Solidbutton, Alert, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthAWS,
    private router: Router,
    private alertService: AlertService
  ) { }

  async onLogin() {
    try {
      await this.authService.handleLogin(this.username, this.password);
      this.alertService.show('success', 'Login successful!', null);
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000)
    } catch (err: any) {
      this.alertService.show('error', 'Login failed!', err)
    }
  }
}
