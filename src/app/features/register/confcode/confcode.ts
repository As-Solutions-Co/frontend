import { Box } from './../../../shared/components/box/box';
import { Header } from '@shared/components/header/header';
import { Solidbutton } from './../../../shared/components/buttons/solidbutton/solidbutton';
import { Component, QueryList, ElementRef, ViewChildren } from '@angular/core';

import { handleInput, handleKeyDown, handlePaste } from './eventsConfCode';
import { AuthAWS } from '@core/services/authaws';
import { AlertService } from '@core/services/alertService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-confcode',
  standalone: true,
  imports: [Solidbutton, Header, Box],
  templateUrl: './confcode.html',
  styleUrl: './confcode.css'
})
export default class Confcode {
  disabled: boolean = true
  otpCode: string[] = new Array(6).fill('');  // Lista de los 6 inputs
  username!: string;

  constructor(private auth: AuthAWS, private alertService: AlertService, private router: Router, private route: ActivatedRoute) { }

  // Referencia a todos los inputs del template (usando el #otpInput)
  @ViewChildren('otpInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['user'] || '';
    })
  }

  ngAfterViewInit() {
    // Enfoca el primer input al cargar
    setTimeout(() => {
      const first = this.inputs.first?.nativeElement;
      if (first) first.focus();
    }, 200)
  }

  onInput(event: Event, index: number) {
    handleInput(event, index, this.inputs, this.otpCode, (filled: boolean) => {
      this.disabled = !filled;
    })
  }

  onkeyDown(event: KeyboardEvent, index: number) {
    handleKeyDown(event, index, this.inputs)
  }

  onPaste(event: ClipboardEvent) {
    handlePaste(event, this.inputs, this.otpCode, (filled: boolean) => {
      this.disabled = !filled;
    })
  }

  async confirmCode() {
    console.log('Username', this.username)
    const code: string = this.otpCode.join('');
    console.log(code)

    try {
      const result = await this.auth.handleConfirmSignUp(this.username, code);
      console.log(result)
      this.alertService.show('success', 'Account confirmed', null);
      setTimeout(() => {
        this.router.navigate(['/login'])
      }, 300)
    } catch (error: any) {
      console.error(error)
      this.alertService.show('error', 'Invalid Code', error.message)
    }
  }
}
