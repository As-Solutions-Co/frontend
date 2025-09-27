import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Card } from './../../shared/components/card/card';
import { Footer } from '@shared/components/footer/footer';
import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { Auth } from '@core/services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from "@shared/components/alert/alert";
import { AlertService } from '@core/services/alertService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, Footer, Card, FormsModule, Solidbutton, Alert],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  username: string = '';
  password: string = '';

  constructor(
    private authService: Auth,
    private router: Router,
    private alertService: AlertService
  ) { }

  onLogin() {
    this.authService.login(
      this.username,
      this.password
    ).subscribe({
      next: (response) => {
        console.log('Login successfully: ', response);
        this.alertService.show('success', 'Login successful!')
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);


      },
      error: (response) => {
        console.log('Error al iniciar sesion: ', response);
        this.alertService.show('error', 'Login failed!');
      }
    })
  }

}
