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


  conteudo: any = undefined;

  private items: any = [];
  carregado: boolean = true;
  
  constructor(
    public http: HttpClient,
    public api: ApiService,
    private route: ActivatedRoute) {

    route.params.subscribe(parametros => {

      // console.log(parametros);

      // console.log(parametros['id']);


      api.carregar_conteudo_pages(parametros['id'])
        .subscribe(data => {

          var idpagina = parametros['id']
          this.carregado = false;
          this.conteudo = data;
          var paginas = this.conteudo;
          var i;
          for (i = 0; i < paginas.length; i++){
            if (paginas[i].id == idpagina) {
              console.log(paginas[i]);
              this.conteudo = paginas[i];
            }
          }

        })

    });

  }


}
