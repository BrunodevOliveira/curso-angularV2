import { FoodList } from './../module/food-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', //informa que esse serviço está disponível em qualquer parte da aplicação
})
export class FoodListService {
  public emitEvent = new EventEmitter();

  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];

  private baseUrl: string = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public foodList(): Observable<FoodList[]> {
    return this.http.get<FoodList[]>(`${this.baseUrl}/list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(`${this.baseUrl}/list-food`, { name: value }, this.httpOptions)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public foodListEdit(id: number, value: string): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.baseUrl}/list-food/${id}`, { name: value }).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListDelete(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.baseUrl}/list-food/${id}`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }
}
