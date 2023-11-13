import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtraiDadosComponent } from './extrai-dados/extrai-dados.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{
  path: '',
  component: ExtraiDadosComponent,
},
  {
    path: 'dashboard',
    component: DashboardComponent,
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}