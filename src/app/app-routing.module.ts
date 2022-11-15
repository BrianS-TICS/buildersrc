import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path : "", redirectTo : "/inicio", pathMatch : 'full'},
  {path : "**", component : LayoutComponent},
  {path : "inicio", component : LayoutComponent},
  {path : "documentacion", component : LayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
