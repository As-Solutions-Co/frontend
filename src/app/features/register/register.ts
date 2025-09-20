import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Card } from './../../shared/components/card/card';
import { Footer } from './../../shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Component } from '@angular/core';
import { Auth } from '@core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Header, Footer, Card, FormsModule, Solidbutton],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export default class Register {
  username: string = '';
  password: string = '';
  cPassword: string = '';
  main_color: string = '';
  dane_code: string = '';

  constructor(private authService: Auth) { }

  onRegister() {

    this.authService.register(
      this.username.trim(),
      this.password.trim(),
      this.cPassword.trim(),
      this.main_color.trim(),
      this.dane_code.trim()
    ).subscribe({
      next: (response: any) => {
        console.log('Usuario registrado: ', response);
        alert('Registro exitoso');
      },
      error: (err: any) => {
        console.log('Error al registrar: ', err);
        alert('Hubo un error en el registro');
      }
    });
  }
}
