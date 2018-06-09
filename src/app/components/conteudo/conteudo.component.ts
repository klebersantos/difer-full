import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent {


  conteudo: any = undefined;

  private items: any = [];
  carregado: boolean = false;
  constructor(
    public http: HttpClient,
    public api: ApiService,
    private route: ActivatedRoute) {

    route.params.subscribe(parametros => {

      // console.log(parametros);

      // console.log(parametros['id']);

      api.carregar_conteudo(parametros['id'])
        .subscribe(data => {

          this.conteudo = data;

        })


    });

  }



}
