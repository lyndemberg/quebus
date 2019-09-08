import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { Pergunta } from 'src/app/model/pergunta.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { toast } from 'angular2-materialize';

@Component({
  templateUrl: './pergunta-details.component.html',
  styleUrls: ['./pergunta-details.component.css']
})
export class PerguntaDetailsComponent implements OnInit {

  pergunta: Pergunta;
  private subscriptions: Subscription[] = [];

  constructor(private perguntaService: PerguntaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe(params => {
        const id = params.get('id');
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

}
