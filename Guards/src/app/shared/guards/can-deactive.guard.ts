import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountComponent } from '../pages/account/account.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactiveGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const response = component.exit();
    console.log('Posso sair da rota: ', response);

    console.log('parametro currentRoute: ', currentRoute);
    console.log('parametro currentState: ', currentState);
    console.log('parametro nextState: ', nextState);

    return response;
  }
}
