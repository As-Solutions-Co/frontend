import { Footer } from '@shared/components/footer/footer';
import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {

}
