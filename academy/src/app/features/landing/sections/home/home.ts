import { Header } from '@shared/components/header/header';
import { Component } from '@angular/core';
import { Footer } from "@shared/components/footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Footer, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
