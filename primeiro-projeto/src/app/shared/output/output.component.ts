import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter(); //crio umaiinstancia de EventEmitter

  public list: Array<{ name: string; age: number }> = [
    { name: 'Bruno', age: 29 },
    { name: 'Barbara', age: 33 },
  ];

  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]); //envio o dado selecionado
  }
}
