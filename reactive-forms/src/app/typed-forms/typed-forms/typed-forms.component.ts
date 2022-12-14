import { UserData } from './../../classes/user-data';
import { ControlsOf } from './../../services/form-utils.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormUtilsService } from 'src/app/services/form-utils.service';
import { IUserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-typed-forms',
  templateUrl: './typed-forms.component.html',
})
export class TypedFormsComponent implements OnInit {
  //* Forma de tipar os ddos que o form possui
  userForm: FormGroup<ControlsOf<IUserData>>;

  constructor(
    private formBuilder: FormBuilder,
    private formUtilsService: FormUtilsService
  ) {
    this.userForm = this.formBuilder.group({
      name: formUtilsService.makeNonNullableFormControl('', [
        Validators.required,
      ]),
      email: formUtilsService.makeNonNullableFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      age: formUtilsService.makeNonNullableFormControl(0, [
        Validators.required,
      ]),
      state: formUtilsService.makeNonNullableFormControl(false, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}

  statusForm!: any;

  registerUser() {
    console.log(this.userForm.value.age);

    //^ 💡Será exibido TRUE para erro e NULL para ausência de erro
    const statusForm = {
      name: this.userForm.get('name')?.errors,
      email: this.userForm.get('email')?.errors,
      age: this.userForm.get('age')?.errors,
      state: this.userForm.get('state')?.errors,
    };

    this.statusForm = statusForm;

    const user: UserData = this.userForm.getRawValue();
    console.log(user);
    console.log('Formulário foi preenchido corretamente:', this.userForm.valid);
  }
}
