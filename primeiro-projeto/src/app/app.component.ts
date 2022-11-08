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
    <app-input [counter]="addValue"></app-input>
    <button (click)="add()">Add</button>

    <ng-template [ngIf]="getDados"
      ><h1>{{ getDados.name }}</h1>
      <h2>{{ getDados.age }}</h2></ng-template
    >
    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public addValue: number = 10;

  public getDados!: { name: string; age: number } | undefined;

  constructor() {}

  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }

  public setDados(event: typeof this.getDados) {
    this.getDados = event;
  }
}
