import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private paginas: any = [];
  carregado: boolean = false;
  constructor(public http: HttpClient, public api: ApiService) { }

  ngOnInit(): void {
    this.api.get('pages.json/').subscribe((data: any) => {
      this.paginas = data;
      this.carregado = true;
      console.log(data);
    });
  }


}
