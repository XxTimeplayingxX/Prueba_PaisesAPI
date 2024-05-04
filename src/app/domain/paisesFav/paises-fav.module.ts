import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesFavRoutingModule } from './paises-fav-routing.module';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PaisesFavRenderComponent } from './pages/paises-fav-render/paises-fav-render.component';


@NgModule({
  declarations: [
    FavoritosComponent,
    PaisesFavRenderComponent
  ],
  imports: [
    CommonModule,
    PaisesFavRoutingModule
  ]
})
export class PaisesFavModule { }
