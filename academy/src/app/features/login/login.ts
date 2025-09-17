import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Card } from './../../shared/components/card/card';
import { Footer } from '@shared/components/footer/footer';
import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';
import { Auth } from '@core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, Footer, Card, FormsModule, Solidbutton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  username: string = '';
  password: string = '';

  constructor(private authService: Auth) { }

  onLogin() {
    this.authService.login(
      this.username,
      this.password
    ).subscribe({
      next: (response) => {
        console.log('Login successfully: ', response);
        alert('Login successfully');
      },
      error: (response) => {
        console.log('Error al iniciar sesion: ', response);
        alert('Login failed')
      }
    })
  }

}
