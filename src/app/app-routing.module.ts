import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { RegistrarProdComponent } from './components/registrar-prod/registrar-prod.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { RegistrarProveComponent } from './components/registrar-prove/registrar-prove.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { MermasListComponent } from './components/mermas-list/mermas-list.component';
import { RegistrarMermasComponent } from './components/registrar-mermas/registrar-mermas.component';
import { RegistrarUserComponent } from './components/registrar-user/registrar-user.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },


  { path: 'listaP', component: ProdListComponent},
  { path: 'registrarp', component: RegistrarProdComponent},

  { path: 'listProveedor', component: ProveedorListComponent},
  { path: 'registrarprov', component: RegistrarProveComponent},

  { path: 'analisis', component: AnalisisComponent},

  { path: 'listaMer', component: MermasListComponent},
  { path: 'registrarMer', component: RegistrarMermasComponent},
  { path: 'registraruser', component: RegistrarUserComponent},

  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
