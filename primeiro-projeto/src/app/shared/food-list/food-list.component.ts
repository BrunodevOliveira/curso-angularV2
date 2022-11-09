import { FoodList } from './../../module/food-list';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList!: FoodList[];

  constructor(private foodListService: FoodListService) {} //Injeção de dependência

  ngOnInit(): void {
    this.foodListService
      .foodList()
      .subscribe({ next: (res) => (this.foodList = res), error: (error) => error });

    //Subscrevo esse componente para quando o componente food-add emitir cum valor
    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert(`Você adicionou o item: ${res.name}`);
        return this.foodList.push(res);
      },
      error: (err: string) => console.log(err),
    });
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe({
      next: (res) => {
        this.foodListService
          .foodList()
          .subscribe({ next: (res) => (this.foodList = res), error: (error) => error });
        // this.foodList = this.foodList.filter(item => item.id !== id) //^Resolução do professor
      },
      error: (err) => console.log(err),
    });
  }

  public foodListEdit(id: number, food: string) {
    return this.foodListService
      .foodListEdit(id, food)
      .subscribe({ next: (res) => console.log(res), error: (err) => console.log(err) });
  }
}
