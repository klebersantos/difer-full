import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  private API_URL: string = 'http://localhost/difertec_app/wp-json/';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  
  public carregar_conteudo_pages( id: string ){
     
    
    return this.get(`wp/v2/pages/${ id }`);
   
  }
  
  public carregar_conteudo( id: string ){
     
    return this.get(`wp/v2/posts/${ id }`);
    
   
  }


  get(query: string = '') {
    return this.http.get(this.API_URL + query);
  }


}
