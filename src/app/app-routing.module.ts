import { ConteudoPaginaComponent } from './components/conteudo-pagina/conteudo-pagina.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conteudo/:id', component: ConteudoComponent },
  { path: 'conteudo-pagina/:id', component: ConteudoPaginaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];



@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ]
})

export class AppRoutingModule {

}

