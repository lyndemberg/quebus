import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pergunta } from 'src/app/model/pergunta.model';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { ActivatedRoute } from '@angular/router';
import { toast } from 'angular2-materialize';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit, OnDestroy {

  pergunta: Pergunta = new Pergunta();
  private subscriptions: Subscription[] = [];

  constructor(private perguntaService: PerguntaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('idPergunta');
        this.subscriptions.push(
          this.perguntaService.buscarPorId(id).subscribe(
            (response) => {
              this.pergunta = response.body.data;
            }, (error) => {
              toast('Não foi possível carregar os dados da pergunta');
            }
          )
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
