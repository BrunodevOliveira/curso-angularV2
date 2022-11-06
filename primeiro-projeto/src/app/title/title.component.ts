import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  // @Input -> serve para receber dados de outro componente
  //'Bem vindo' se torna um dado default para quando não vier informação de fora do componente.
  @Input() public title = 'Bem vindo';

  // O constructor é executado primeiro, antes da execução de qualquer outro evento de ciclo de vida
  constructor() {}
  /**
 * O Angular possui 8 eventos que são executados em algum momento do ciclo de vida do componente
 * ngOnChanges() -> chamado uma vez na criação do componente e sempre que houver alteração em uma de suas propriedades de entrada. Ou seja, mudanças no Input() decorator e no property binding.
 * ngOnInit() -> chamado uma única vez quando o componente é inicializado (logo após o primeiro ngOnChanges)
 * ngDoCheck() ->  chamado a cada ciclo de detecção de alterações (processo que percorre o componente atrás de mudanças). Portanto use ao invés do ngOnChanges para alterações que o Angular não detecta.
 *  ngAfterContentInit()-> chamado depois que o conteúdo externo é inserido no componente (por exemplo, vindo do ng-content).
    ngAfterContentChecked()-> invocado após a verificação do conteúdo externo.
    ngAfterViewInit()-> chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado.
    ngAfterViewChecked()-> chamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular.
 * ngOnDestroy()-> chamado antes do Angular destruir o componente.
 */

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log(
      'ngOnChanges: É executado quando receber um dado de fora do componente'
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Componente foi desctruido');
  }
}
