import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public items: any = [];
  constructor(public api: ApiService) { }

  getPosts(){
    this.api.get('posts?_embed').subscribe((data) => {
      this.items = data;
      console.log(data);
    });
      
  }

}
