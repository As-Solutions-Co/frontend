import { About } from './sections/about/about';
import { Home } from './sections/home/home';
import { Tools } from './sections/tools/tools';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '@shared/components/header/header';
import { Footer } from '@shared/components/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    Footer,
    Tools,
    Home,
    About,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export default class Landing {

}
