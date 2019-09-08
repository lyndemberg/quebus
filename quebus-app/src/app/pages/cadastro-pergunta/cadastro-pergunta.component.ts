import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UsuarioStorageService } from 'src/app/core/services/usuario-storage.service';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-pergunta.component.html',
  styleUrls: ['./cadastro-pergunta.component.css']
})
export class CadastroPerguntaComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  formCadastroPergunta: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
  });

  constructor(private titleService: Title,
              private usuarioStorage: UsuarioStorageService,
              private perguntaService: PerguntaService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Cadastro de pergunta');

    const userId = this.usuarioStorage.recuperarUsuarioLocal()._id;
    this.formCadastroPergunta.get('user').setValue(userId);
  }

  ngOnDestroy() {
    if (this.subscription != null) { this.subscription.unsubscribe(); }
  }

  cadastrar(): void {
    const pergunta = this.formCadastroPergunta.value;
    this.subscription = this.perguntaService.cadastrar(pergunta).subscribe(
      (response) => {
        this.toastr.success('', 'Sua pergunta foi cadastrada!');
        this.router.navigate(['/paginainicial']);
      }, (error) => {
        this.toastr.error('', 'Sua pergunta não pôde ser feita');
      }
    );
  }

}
