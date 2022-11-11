import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  // {path: "", component: PageComponent, pathMatch: 'full'} //pathMatch: 'full' -> utilizado na rota default para impedir que seja renderizado somente o necessário
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [
      { path: ':id/:username', component: SobreComponent }, //Parâmetro de rota
    ],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ), //recebe uma função que importa o módulo e quando resolver esse módulo irá carregar as rotas que estão importadas no módulo dasboard que vinheram de dashboard-routing
  },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '404' }, //Rota Coringa -> Caso a pessoa digite uma rota erra, será redirecionada para a escolhida
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], //Carrega as rotas principais da aplicação, só existe um forRoot em toda a aplicação
  exports: [RouterModule],
})
export class AppRoutingModule {}
