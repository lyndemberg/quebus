import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    LoginComponent,
    PagesComponent,
    PaginaInicialComponent,
    GerenciarUsuariosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ],
  bootstrap: [LoginComponent]
})
export class PagesModule { }
