import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  public items: any = [];
  carregado: boolean = false;
  constructor(public HttpClient: HttpClient, public api: ApiService,  
  ) { 
 
  }




  ngOnInit(): void {
    this.api.get('posts.json').subscribe((data: any) => {
      this.items = data;
      this.carregado = true;
      console.log(data);
    });
  }



}
