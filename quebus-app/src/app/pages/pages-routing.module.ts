import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GerenciarObservacaoComponent } from './gerenciar-observacao/gerenciar-observacao.component';
import { MinhasPerguntasComponent } from './minhas-perguntas/minhas-perguntas.component';
import { MinhasRespostasComponent } from './minhas-respostas/minhas-respostas.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { RouteGuard } from '../core/guards/route.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    canActivate: [RouteGuard],
    children: [
      { path: 'paginainicial', component: PaginaInicialComponent },
      { path: 'gerenciarusuarios', component: GerenciarUsuariosComponent },
      { path: 'cadastrousuario', component: CadastroUsuarioComponent },
      { path: 'gerenciarobservacao', component: GerenciarObservacaoComponent },
      { path: 'minhasperguntas', component: MinhasPerguntasComponent },
      { path: 'minhasrespostas', component: MinhasRespostasComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
