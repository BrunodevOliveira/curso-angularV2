import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <app-input
        [control]="formGroup.controls.firstName"
        inputId="firstName"
        label="Nome"
      ></app-input>
      <app-input
        [control]="formGroup.controls.lastName"
        inputId="lastName"
        label="Sobrenome"
      ></app-input>
      <app-input
        [control]="formGroup.controls.email"
        inputId="email"
        label="Email"
      ></app-input>
    </form>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {
    // this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup));
  }
}
