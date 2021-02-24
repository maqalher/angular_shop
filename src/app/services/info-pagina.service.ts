import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {}; // trae los valores de la interface
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    // console.log('Servico de info pagina listo');
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        // reconoce que es un interface

        this.cargada = true;
        this.info = resp;

        // console.log(resp)
      });
  }

  private cargarEquipo() {
    this.http
      .get('https://angular-portafolio-f1a9f-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.equipo = resp
        // console.log(resp);
      });
  }
}
