import { CommonModule } from '@angular/common';
import { Box } from './../box/box';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Box, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  text = "The leading platform for academic information management, connecting students, teachers, and institutions within a smart educational ecosystema."
  email = "contacto@academiaapp.com"
  phone = "+1 (555) 123-4567"
  loc = "Ciudad Universitaria, Campus Digital"

}
