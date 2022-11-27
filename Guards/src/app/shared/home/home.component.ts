import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <a routerLink="account" [queryParams]="userData">Account</a> <br /><br />
    <a routerLink="account" [queryParams]="{ account: 'admin', password: '123' }">Account False</a>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}
  userData = {
    account: 'admin',
    password: '1234',
  };
  ngOnInit(): void {}
}
