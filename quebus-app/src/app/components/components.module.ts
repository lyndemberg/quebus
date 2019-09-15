import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list-component/usuario-list-component.component';
import { PerguntaComponent } from './pergunta/pergunta.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [NavigationComponent, UsuarioListComponent, PerguntaComponent, FeedComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent, UsuarioListComponent, PerguntaComponent, FeedComponent
  ]
})
export class ComponentsModule { }
