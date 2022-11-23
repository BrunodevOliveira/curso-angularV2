import { FormControl } from '@angular/forms';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';

  errorMessages: Record<string, string> = {
    required: 'Campo obrigatório',
    email: 'E-mail inválido',
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.control.errors);
  }
}
