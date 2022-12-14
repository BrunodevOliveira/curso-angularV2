import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)], //Como o lazi loading trabalha com rotas filhas, utilizamos o forChild
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
