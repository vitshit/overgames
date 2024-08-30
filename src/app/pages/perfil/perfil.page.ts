import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;

  email!: string;
  password!: string;
  nombre!: string;
  password2!:string;

  constructor(private router:Router, private activedroute:ActivatedRoute, private alercontroller: AlertController) {
    //subscribirse a promesa o observable
    this.activedroute.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        //recepcionar y guardar datos
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['usuario'];
        
      }

    });
   }

  ngOnInit() {
  }

  validarModificacion() {


    if (this.nombre.length<4) {
      const titulo = "Nombre invalido";
      const mensaje = "El campo de nombre no puede estar vacío o contener menos de 4 caracteres";
      this.alertaCambio(titulo, mensaje);
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) { 
      const titulo = "Correo Electronico invalido";
      const mensaje = "Ingrese correo con formato valido";
      this.alertaCambio(titulo, mensaje);
      return;
    }

    if(this.password.length < 6) { 
      const titulo = "Contraseña invalida";
      const mensaje = "Por favor, ingrese una contraseña de 6 digitos";
      this.alertaCambio(titulo, mensaje);
      return;
    }

    if(this.password != this.password2 ) { 
      const titulo = "Las contraseñas no son iguales";
      const mensaje = "Por favor, ingrese la misma";
      this.alertaCambio(titulo, mensaje);
      return;
    }

    this.alertaCambio('Exitoso', 'Sus datos se cambiaron con exito.');
    setTimeout(() => {
      this.router.navigate(['/home']);;  // Cambia '/ruta-destino' por la ruta a la que quieres redirigir
    }, 400);

}


async alertaCambio(titulo:string , mensaje: string){
  const alert = await this.alercontroller.create({
    header: titulo,
    message: mensaje,
    buttons: ['OK']
  });
  await alert.present();
}



}
