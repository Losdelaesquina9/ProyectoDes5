import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { BuscarService } from '../services/buscar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  registro1 = {
    usuario: '',
    pass: '',
    telefono: '',
    email: '',
    direccion: '',    
    tipoMov: 'insertarEmpleado'
  };

  constructor(private serv: BuscarService,    
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) {
      return;
    }

     await this.serv.postData(this.registro1);

     this.navCtrl.navigateRoot('login');


  }

}
