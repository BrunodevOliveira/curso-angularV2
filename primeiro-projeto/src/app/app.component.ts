import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-new-component></app-new-component>
    <app-data-biding></app-data-biding>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos>
      <h3>Aula de Diretivas Atributos</h3>
      <hr />
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
