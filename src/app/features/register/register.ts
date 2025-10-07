import { Alert } from '@shared/components/alert/alert';
import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { Footer } from './../../shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '@core/services/alertService';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Box } from "@shared/components/box/box";
import { AuthAWS } from '@core/services/authaws';
import { autoSignIn } from 'aws-amplify/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Header, Footer, FormsModule, Alert, Box, Solidbutton, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export default class Register {
  username: string = '';
  email: string = '';
  password: string = '';
  cPassword: string = '';
  main_color: string = '';
  dane_code: string = '';


  constructor(private authService: AuthAWS, private alertService: AlertService, private router: Router) { }

  async register() {
    try {
      await this.authService.handleSignUp(this.username, this.email, this.password);
      this.alertService.show('success', 'Successfully registered academy', 'Revisa tu correo');

      setTimeout(() => {
        this.router.navigate(['/confirmcode'], { queryParams: { user: this.username } })
      }, 200)

    } catch (err: any) {
      this.alertService.show('error', 'Failed register', err.message);
    }
  }

}
