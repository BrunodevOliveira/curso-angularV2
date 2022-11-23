import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  //* os valores do Form ficarão armazenados na propriedade cadastroform, especificado na tag form

  public cadastroForm: FormGroup<IForm> = this.formBuilder.nonNullable.group({
    //* Guardo o valor de cada input em uma chave
    // firstName: ['', Validators.required],
    // lastName: [
    //   '',
    //   [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    // ],
    // email: ['', [Validators.required, Validators.email]],

    //  Forma Do prof Udemy -------------------------------------------------------------------------------------

    // ^💡 Forma tipando o formulário
    firstName: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    lastName: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public submitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }
  }

  /**
   *  ~ Validação=>  https://angular.io/guide/form-validation
   * Validators.required -> Só envia o forma se o campo estiver preenchido
   */
}
interface IForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
}
