import { Component, OnInit, OnDestroy } from '@angular/core';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { Router } from '@angular/router';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { toast } from 'angular2-materialize';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './cadastro-aviso.component.html',
  styleUrls: ['./cadastro-aviso.component.css']
})
export class CadastroAvisoComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  formGroupAviso: FormGroup = new FormGroup({
    message: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
  });

  constructor(private avisoService: AvisoService,
              private titleService: Title,
              private toastr: ToastrService,
              private usuarioStorage: UsuarioStorageService,
              private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Cadastro de aviso');

    const usuarioId = this.usuarioStorage.recuperarUsuarioLocal()._id;
    this.formGroupAviso.get('user').setValue(usuarioId);
  }

  ngOnDestroy(): void {
    if (this.subscription != null) { this.subscription.unsubscribe(); }
  }

  cadastrar(): void {
    const aviso = this.formGroupAviso.value;
    this.subscription = this.avisoService.cadastrar(aviso).subscribe(
      (response) => {
        this.toastr.success('Aviso cadastrado com sucesso!');
        this.router.navigate(['/gerenciaravisos']);
      }, (error) => {
        this.toastr.error('Não foi possível salvar o aviso!');
      }
    );
  }

}
