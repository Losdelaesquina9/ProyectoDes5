import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../services/buscar.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {

  datosid: any;
  constructor(private serv: BuscarService,
    public toastController: ToastController,
    private navCtrl: NavController) { }
 

  modelos = {
    cliente: '',
    sku: '',
    modelo: '',
    marca: '',
    color: '',
    talla: '',
    linea: '',
    existencia: '',
    precio: ''
  };
  async ngOnInit() {
   

  }

   async registroP(){

    this.presentToast();

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
    this.modelos.existencia = this.datosid.result.existencia;
    this.modelos.precio = this.datosid.result.precio;

    // console.log(this.datosid);

  }

  async salir(){   
    this.navCtrl.navigateRoot('login');
  }
  async limpiar(){

    this.modelos = {
      cliente: '',
      sku: '',
      modelo: '',
      marca: '',
      color: '',
      talla: '',
      linea: '',
      existencia: '',
      precio: ''
    };

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Pedido Realizado con exito.',
      duration: 4000,
      color: "success",
      position: "middle"
    });
    toast.present();
  }

}
