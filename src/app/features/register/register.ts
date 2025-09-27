import { Alert } from '@shared/components/alert/alert';
import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Card } from './../../shared/components/card/card';
import { Footer } from './../../shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Component } from '@angular/core';
import { Auth } from '@core/services/auth';
import { FormsModule } from '@angular/forms';
import { AlertService } from '@core/services/alertService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Header, Footer, Card, FormsModule, Solidbutton, Alert],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export default class Register {
  username: string = '';
  password: string = '';
  cPassword: string = '';
  main_color: string = '';
  dane_code: string = '';

  constructor(private authService: Auth, private alertService: AlertService, private router: Router) { }

  onRegister() {
    this.authService.register(
      this.username,
      this.password,
      this.cPassword,
      this.main_color,
      this.dane_code
    ).subscribe({
      next: (response: any) => {
        console.log('Usuario registrado: ', response);
        this.alertService.show('success', 'Successfully registered academy');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000)

      },
      error: (err: any) => {
        console.log('Error al registrar: ', err);
        this.alertService.show('error', 'Failed register')
      }
    });
  }
}
