import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router:Router){
    this.form = fb.group(
      {
        usuario: (''),
        contrasena: ('')
      }
    )
  }

  validacion(){
    if(this.form.value.usuario == 'admin' && this.form.value.contrasena == 'admin'){
      console.log('Usuario y contraseña validos');
      this.router.navigate(['/paises']);
    }
    else{
      alert('Usuairo o contraseña Invalidos');
    }
  }
}
