import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesRenderComponent } from './pages/paises-render/paises-render.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaisesComponent,
    PaisesRenderComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PaisesModule { }
