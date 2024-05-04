import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Country } from './../../../../shared/MODELS/interface.models';
import { ConutryServiceService } from '../../../services/conutry-service.service';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { PaisesRoutingModule } from '../../paises-routing.module';
import { loadZone } from 'zone.js/lib/zone';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css',
})
export class PaisesComponent implements OnInit {
  pais = <Country[]>[];
  paisesFavoritos = <Country[]>[];
  form: FormGroup;

  constructor(
    private countryService: ConutryServiceService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      countryToFind: '',
    });
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.countryService.getData().subscribe((data) => {
      this.pais = data;
    });
  }
  Favoritos(index: number) {
    this.paisesFavoritos.push(this.pais[index]);
    console.log('Guardando en local storage al país: ' + this.pais[index]);
    localStorage.setItem('favoritos', JSON.stringify(this.paisesFavoritos));
  }
  mostrarFavoritos() {
    console.log('Mostrando paises Favoritos: ');
    console.log(localStorage.getItem('favoritos'));
  }
  getDataName() {
    console.log('El form es válido: ' + this.form.value.countryToFind);
    this.countryService
      .getDataName(this.form.value.countryToFind)
      .subscribe((countryFound) => {
        this.pais = countryFound;
      });
  }
  
}
