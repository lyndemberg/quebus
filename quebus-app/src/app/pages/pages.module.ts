import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { CadastroPerguntaComponent } from './cadastro-pergunta/cadastro-pergunta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GerenciarAvisosComponent } from './gerenciar-avisos/gerenciar-avisos.component';
import { MinhasPerguntasComponent } from './minhas-perguntas/minhas-perguntas.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerguntaDetailsComponent } from './pergunta-details/pergunta-details.component';
import { CadastroAvisoComponent } from './cadastro-aviso/cadastro-aviso.component';
import { RespostasComponent } from './respostas/respostas.component';

@NgModule({
  declarations: [
    LoginComponent,
    PagesComponent,
    PaginaInicialComponent,
    GerenciarUsuariosComponent,
    CadastroPerguntaComponent,
    PageNotFoundComponent,
    GerenciarAvisosComponent,
    MinhasPerguntasComponent,
    CadastroUsuarioComponent,
    PerguntaDetailsComponent,
    CadastroAvisoComponent,
    RespostasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgSelectModule
  ],
  providers: [
  ],
  bootstrap: [LoginComponent]
})
export class PagesModule { }
