import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list-component/usuario-list-component.component';



@NgModule({
  declarations: [NavigationComponent, UsuarioListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent, UsuarioListComponent
  ]
})
export class ComponentsModule { }
