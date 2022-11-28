import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadsComponent } from './pages/leads/leads.component';

@NgModule({
  declarations: [DashboardComponent, LeadsComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
