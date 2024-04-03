import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';

import { RegistrarMermasComponent } from './components/registrar-mermas/registrar-mermas.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { RegistrarProdComponent } from './components/registrar-prod/registrar-prod.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { RegistrarProveComponent } from './components/registrar-prove/registrar-prove.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { MermasListComponent } from './components/mermas-list/mermas-list.component';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RegistrarUserComponent } from './components/registrar-user/registrar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HerramientasComponent,
    RegistrarMermasComponent,
    ProdListComponent,
    RegistrarProdComponent,
    ProveedorListComponent,
    RegistrarProveComponent,
    AnalisisComponent,
    MermasListComponent,
    RegistrarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
