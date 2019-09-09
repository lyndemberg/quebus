import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list-component',
  templateUrl: './usuario-list-component.component.html',
  styleUrls: ['./usuario-list-component.component.css']
})
export class UsuarioListComponent implements OnInit, OnDestroy {

  @Input() usuarioList: Usuario[];
  private subscription: Subscription;

  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscription != null) { this.subscription.unsubscribe(); }
  }

}
