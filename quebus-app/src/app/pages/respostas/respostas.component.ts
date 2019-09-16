import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pergunta } from 'src/app/model/pergunta.model';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'angular2-materialize';
import { Subscription } from 'rxjs';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit, OnDestroy {

  pergunta: Pergunta = new Pergunta();
  private subscriptions: Subscription[] = [];
  formGroupResposta: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
  });

  constructor(private perguntaService: PerguntaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  adicionarResposta(): void {

  }
}
