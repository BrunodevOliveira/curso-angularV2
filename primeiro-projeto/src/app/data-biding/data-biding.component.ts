import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  constructor() {}

  public name: string = 'Bruno';
  public age: number = 29;

  public checkedDisabled: boolean = false;
  public imgSrc: string = 'https://avatars.githubusercontent.com/u/85235164?v=4';
  public imgTitle: string = 'Foto do perfil do gitHub';

  public position: { x: number; y: number } = { x: 0, y: 0 };

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
