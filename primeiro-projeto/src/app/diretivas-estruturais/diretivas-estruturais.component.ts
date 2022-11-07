import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = false;
  public conditionClick: boolean = true;
  public name: string = '';

  public list: Array<{ name: string }> = [{ name: 'Bruno' }, { name: 'Barbara' }, { name: 'Tata' }];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 3000);
  }

  public onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList() {
    this.list.push({ name: 'Marlene' });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
