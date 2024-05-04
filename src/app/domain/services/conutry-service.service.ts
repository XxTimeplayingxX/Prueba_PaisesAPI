import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {enviromente} from './../enviroment/enviroment'

@Injectable({
  providedIn: 'root'
})
export class ConutryServiceService {

  constructor(private http:HttpClient) { }

  //Metodos de la API
  getData():Observable<any>{
    return this.http.get<any>(`${enviromente.API_URL}/all`)
  }
  getDataName(countryName: string):Observable<any>{
    return this.http.get<any>(`${enviromente.API_URL}/name/${countryName}`)
  }
}
