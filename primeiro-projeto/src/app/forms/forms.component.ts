import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listFoods: Array<{ food: string; preco: string }> = [
    { food: 'X-salada', preco: 'R$10,00' },
    { food: 'X-bacon', preco: 'R$12,00' },
    { food: 'Coxinha', preco: 'R$8,00' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public submitForm(form: NgForm) {
    if (form.valid) console.log(form.value);
  }
}
