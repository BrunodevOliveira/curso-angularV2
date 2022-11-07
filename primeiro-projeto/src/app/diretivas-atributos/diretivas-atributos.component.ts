import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = false;
  public height: string = '1.3rem';
  public name: string = '';

  public list: Array<{ name: string }> = [];

  public date: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
      this.height = this.height == '1.3rem' ? '2rem' : '1.3rem';
    }, 3000);
  }

  public save() {
    this.list.push({ name: this.name });
    this.name = '';
  }
}
