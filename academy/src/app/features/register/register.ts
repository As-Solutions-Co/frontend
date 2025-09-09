import { Solidbutton } from './../../shared/components/buttons/solidbutton/solidbutton';
import { CommonModule } from '@angular/common';
import { Card } from './../../shared/components/card/card';
import { Footer } from './../../shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Header, Footer, Card, CommonModule, Solidbutton],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export default class Register {
  username: string = '';
  password: string = '';
  cPassword: string = '';
  main_color: string = '';
  dane_code: string = '';
  color: string = '';
}
