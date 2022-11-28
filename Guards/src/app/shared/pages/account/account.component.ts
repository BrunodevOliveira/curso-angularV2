import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
    <p>account works!</p>
    <a routerLink="/">Sair</a>
  `,
  styles: [],
})
export class AccountComponent implements OnInit {
  constructor() {}

  exit() {
    if (confirm('Você quer sair?')) {
      return true;
    }

    return false;
  }
  ngOnInit(): void {}
}
