import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'login',
        loadChildren: ()=>import('./domain/login/login.module').then(l=>l.LoginModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'paises',
        loadChildren: () => import('./domain/paises/paises.module').then(p=>p.PaisesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
