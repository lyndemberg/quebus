import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';

@Component({
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  formGroupCadatro: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    roles: new FormControl([], Validators.required)
  });

  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private router: Router,
              private el: ElementRef) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.subscription != null) { this.subscription.unsubscribe(); }
  }

  cadastrar(): void {
    const usuario = this.formGroupCadatro.value;
    this.subscription = this.usuarioService.cadastrar(usuario)
      .subscribe(response => {
        this.toastr.success('', 'Usuário cadastrado com sucesso!');
        this.router.navigate(['/gerenciarusuarios']);
      }, error => {
        this.toastr.error('', 'Não foi possível realizar o cadastro!');
      });
  }

}
