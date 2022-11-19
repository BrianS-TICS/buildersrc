import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TalentComponent } from './components/pages/talent/talent.component';

const routes: Routes = [
  {path : "inicio", component : HomeComponent},
  {path : "servicios", component : ServicesComponent},
  {path : "talento", component : TalentComponent},
  {path : "contacto", component : ContactComponent},
  {path : "documentacion", component : DocumentationComponent},
  {path : "**", component : HomeComponent},
  {path : "", redirectTo : "/inicio", pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
