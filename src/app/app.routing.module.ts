import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DeputadosComponent } from './deputados/deputados.component';
import { DiscursoPalarmentarComponent } from './discurso-palarmentar/discurso-palarmentar.component';



const appRoutes: Routes = [

  { path: '', component: DeputadosComponent},

  { path: 'parlamentar/detalhes/:nome', component: DiscursoPalarmentarComponent},


  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
