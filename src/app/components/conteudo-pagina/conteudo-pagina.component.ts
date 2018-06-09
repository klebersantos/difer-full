import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-conteudo-pagina',
  templateUrl: './conteudo-pagina.component.html',
  styleUrls: ['./conteudo-pagina.component.scss']
})
export class ConteudoPaginaComponent {


  private conteudo: any = [];
  carregado: boolean = false;
  constructor(
    public http: HttpClient,
    public api: ApiService,
    private route: ActivatedRoute) {

    route.params.subscribe(parametros => {

      // console.log(parametros);

      // console.log(parametros['id']);


      api.carregar_conteudo_pages(parametros['id'])
        .subscribe(data => {

          this.conteudo = data;
          this.carregado = true;

        })

    });

  }


}
