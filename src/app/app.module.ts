import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { SeccionTecnologiasComponent } from './components/seccion-tecnologias/seccion-tecnologias.component';
import { MobileMenuComponent } from './components/navbar/mobile-menu/mobile-menu.component';
import { IconosFlotantesComponent } from './components/iconos-flotantes/iconos-flotantes.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TalentComponent } from './components/pages/talent/talent.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHeroComponent,
    SeccionTecnologiasComponent,
    MobileMenuComponent,
    IconosFlotantesComponent,
    FooterComponent,
    GaleriaComponent,
    HomeComponent,
    DocumentationComponent,
    ServicesComponent,
    ContactComponent,
    TalentComponent,
    ListClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
