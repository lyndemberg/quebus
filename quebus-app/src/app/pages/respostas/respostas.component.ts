import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pergunta } from 'src/app/model/pergunta.model';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { toast } from 'angular2-materialize';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit, OnDestroy {

  pergunta: Pergunta = new Pergunta();
  private subscriptions: Subscription[] = [];
  formGroupResposta: FormGroup = new FormGroup({
    comment: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
  });

  constructor(private perguntaService: PerguntaService,
              private usuarioStorage: UsuarioStorageService,
              private titleService: Title,
              private router: Router,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Respostas da pergunta');

    const userId = this.usuarioStorage.recuperarUsuarioLocal()._id;
    this.formGroupResposta.get('user').setValue(userId);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  adicionarResposta(): void {
    this.subscriptions.push(
      this.perguntaService.addResposta(this.pergunta._id, this.formGroupResposta.value)
        .subscribe(
          (response) => {
            this.toastr.success('', 'Resposta salva com sucesso!');
          }, (error) => {
            this.toastr.error('', 'Não foi possível salvar a resposta!');
          }
        )
    )
  }
}
