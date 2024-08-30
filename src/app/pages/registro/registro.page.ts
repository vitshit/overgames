import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //Usuario temporal para hacer validaciones
  registro:any = {
    email: "vixo@gmail.com",
    password: "vixo123",
    nombre: "vicente"
  };  



  email!: string;
  password!: string;
  nombre!: string;

  constructor(private router: Router, private alercontroller: AlertController) { }

  ngOnInit() {
  }

  validarLogin() {


    if (this.nombre.length<4) {
      const titulo = "Nombre invalido";
      const mensaje = "El campo de nombre no puede estar vacío o contener menos de 4 caracteres";
      this.alertaLogin(titulo, mensaje);
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) { 
      const titulo = "Correo Electronico invalido";
      const mensaje = "Ingrese correo con formato valido";
      this.alertaLogin(titulo, mensaje);
      return;
    }

    if(this.password.length < 6) { 
      const titulo = "Contraseña invalida";
      const mensaje = "Por favor, ingrese una contraseña de 6 digitos";
      this.alertaLogin(titulo, mensaje);
      return;
    }

  

    this.alertaLogin('Registro exitoso', 'Porfavor inicie sesion.');
    setTimeout(() => {
      this.irPagina();  // Cambia '/ruta-destino' por la ruta a la que quieres redirigir
    }, 400);

}


async alertaLogin(titulo:string , mensaje: string){
  const alert = await this.alercontroller.create({
    header: titulo,
    message: mensaje,
    buttons: ['OK']
  });
  await alert.present();
}



  irPagina(){
    
    this.router.navigate(['/login']);
  }

}
