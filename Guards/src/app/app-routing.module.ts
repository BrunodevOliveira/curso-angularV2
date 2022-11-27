import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccountComponent } from "./shared/account/account.component";
import { CanActiveGuard } from "./shared/guards/can-active.guard";
import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [CanActiveGuard],
  },
  { path: "**", redirectTo: "" }, //Rota Coringa -> Caso a pessoa digite uma rota erra, será redirecionada para a escolhida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
