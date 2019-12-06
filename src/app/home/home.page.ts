import { Component } from '@angular/core';
import { BuscarService } from '../services/buscar.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ListaCanciones: any; 

  respuesta: any;

  constructor(private serv: BuscarService,private navCtrl: NavController) {
    this.getData();
  }

  async getData() {
    const valores = { 
      tipoMov: 'getData2' 
   };  
   
    this.respuesta = await this.serv.postData(valores);
    
    this.ListaCanciones = this.respuesta.result;
    console.log(this.ListaCanciones);
    
   }


   async clickLista(rol: string){
      console.log(rol);
      if(rol === "registro"){
       // Navegar a registro 
       this.navCtrl.navigateForward('registro', { animated: true });
      }else{
       // Navegar a comanda   
       this.navCtrl.navigateRoot('comanda', { animated: true });    
      }
    
    
    }
  
}

