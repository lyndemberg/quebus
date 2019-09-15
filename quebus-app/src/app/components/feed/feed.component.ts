import { Component, OnInit, ElementRef } from '@angular/core';
import { Pergunta } from 'src/app/model/pergunta.model';
import { PerguntaService } from 'src/app/core/services/pergunta.service';
import { Subscription } from 'rxjs';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  perguntaList: Pergunta[] = [];
  private subscription: Subscription;

  constructor(private perguntaService: PerguntaService,
              private el: ElementRef) { }

  ngOnInit() {
    this.subscription = this.perguntaService.listarTodas()
      .subscribe(
        (response) => {
          this.perguntaList = response.body.data;
        }, (error) => {
          toast('Não foi possível listar o feed', 2000);
        }
      );

    ($(this.el.nativeElement) as any).find('.collapsible').collapsible();
  }

}
