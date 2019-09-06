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
import { GerenciarObservacaoComponent } from './gerenciar-observacao/gerenciar-observacao.component';
import { MinhasPerguntasComponent } from './minhas-perguntas/minhas-perguntas.component';
import { MinhasRespostasComponent } from './minhas-respostas/minhas-respostas.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    LoginComponent,
    PagesComponent,
    PaginaInicialComponent,
    GerenciarUsuariosComponent,
    CadastroPerguntaComponent,
    PageNotFoundComponent,
    GerenciarObservacaoComponent,
    MinhasPerguntasComponent,
    MinhasRespostasComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NgSelectModule
  ],
  bootstrap: [LoginComponent]
})
export class PagesModule { }
