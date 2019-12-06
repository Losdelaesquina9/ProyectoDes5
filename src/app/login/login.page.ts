import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { BuscarService } from '../services/buscar.service';
import { NgForm } from '@angular/forms';
/* import { Storage } from '@ionic/storage'; */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal', { static: false }) slides: IonSlides;
  seleccion = true;
  loginUser = {
    usuario: 'prueba',
    pass: '123',
    tipoMov: 'login'
  };

  DatosUsuarios: any;
  constructor(
    private serv: BuscarService,    
    private navCtrl: NavController
  ) {}
 
  ngOnInit() {}

  ionViewWillEnter() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {
    /* console.log(fLogin.valid); */
    if (fLogin.invalid) {
      return;
    }

    this.DatosUsuarios = await this.serv.postData(this.loginUser);
    console.log(this.DatosUsuarios);

    if (this.DatosUsuarios.success) {
      /* console.log('entrar');*/
      // navegar al tabs
      if(this.DatosUsuarios.result.rol === "1"){
       // Es el gerente  
       this.navCtrl.navigateRoot('home', { animated: true });
      }else{
       // Es el empleado   
       this.navCtrl.navigateRoot('comanda', { animated: true });    
      }
      
      /* this.storage.set('dataUsarios', this.DatosUsuarios.result); */
    } else {
      /* console.log('no entrar'); */
    }
  }

 

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.seleccion = false;
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.seleccion = true;
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
