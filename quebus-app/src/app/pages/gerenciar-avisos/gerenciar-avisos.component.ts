import { Component, OnInit, OnDestroy } from '@angular/core';
import { AvisoService } from 'src/app/core/services/aviso.service';
import { Aviso } from 'src/app/model/aviso.model';
import { Subscription } from 'rxjs';
import { toast } from 'angular2-materialize';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './gerenciar-avisos.component.html',
  styleUrls: ['./gerenciar-avisos.component.css']
})
export class GerenciarAvisosComponent implements OnInit, OnDestroy {

  avisoList: Aviso[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private avisoService: AvisoService,
              private router: Router,
              private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('QUEBUS - Gerenciar avisos');
    this.subscriptions.push(
      this.avisoService.listarTodos().subscribe(
        (response) => {
          this.avisoList = response.body.data;
        }, (error) => {
          toast('Não foi possível carregar os avisos', 3000);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  deletar(id: string): void {
    this.subscriptions.push(
      this.avisoService.deletar(id).subscribe(
        (response) => {
          this.avisoList = this.avisoList.filter(aviso => aviso._id !== id);
          toast('Aviso removido com sucesso', 3000);
        }, (error) => {
          toast('Não foi possível remover o aviso', 3000);
        }
      )
    );
  }

}
