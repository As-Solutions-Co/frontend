import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { CommonModule } from '@angular/common';
import { Card } from './../../shared/components/card/card';
import { Footer } from '@shared/components/footer/footer';
import { Component } from '@angular/core';
import { Header } from '@shared/components/header/header';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, Footer, Card, CommonModule, Solidbutton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {
  username: string = '';
  password: string = '';

}
