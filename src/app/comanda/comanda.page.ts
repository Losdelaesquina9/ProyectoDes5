import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../services/buscar.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {

  datosid: any;
  constructor(private serv: BuscarService) { }
 

  modelos = {
    cliente: '',
    sku: '',
    modelo: '',
    marca: '',
    color: '',
    talla: '',
    linea: ''
  };
  async ngOnInit() {
   

  }

  async buscarSku(){
   
    const valor = {
      tipoMov: 'buscarModelo',
      idArticulo: this.modelos.sku
  
      };
    this.datosid = await this.serv.postData(valor);

    this.modelos.modelo = this.datosid.result.modelo;
    this.modelos.marca = this.datosid.result.marca;
    this.modelos.color = this.datosid.result.color;
    this.modelos.talla = this.datosid.result.talla;
    this.modelos.linea = this.datosid.result.tipocatalogo;
    

    console.log(this.datosid);

  }

}
