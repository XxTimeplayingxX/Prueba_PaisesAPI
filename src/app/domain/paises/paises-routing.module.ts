import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesRenderComponent } from './pages/paises-render/paises-render.component';

const routes: Routes = [
  {
    path: '',
    component: PaisesRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
