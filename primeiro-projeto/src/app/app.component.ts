import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Bem vindo via @Input()" *ngIf="destruir"></app-title>
    {{ valor }}
    <button (click)="adicionar()">Adicionar</button>
    <br />
    <button (click)="destruirComponente()">Destruir Componente</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {}

  public adicionar(): number {
    return (this.valor += 1);
  }

  public destruirComponente(): void {
    this.destruir = !this.destruir;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log(
      'ngDoCheck: chamado a cada ciclo de detecção de alterações (processo que percorre o componente atrás de mudanças). Portanto use ao invés do ngOnChanges para alterações que o Angular não detecta.'
    );
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked: invocado após a verificação do conteúdo externo.'
    );
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked: chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.'
    );
  }
}
