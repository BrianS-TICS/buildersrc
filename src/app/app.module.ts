import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { SeccionTecnologiasComponent } from './components/seccion-tecnologias/seccion-tecnologias.component';
import { MobileMenuComponent } from './components/navbar/mobile-menu/mobile-menu.component';
import { IconosFlotantesComponent } from './components/iconos-flotantes/iconos-flotantes.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHeroComponent,
    SeccionTecnologiasComponent,
    MobileMenuComponent,
    IconosFlotantesComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
