import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Usuario temporal para hacer validaciones
  usuario:any = {
    email: "vixo@gmail.com",
    password: "vixo123",
    nombre: "vicente"
  };

  //Variables que almacenan los datos de acceso
  email!: string;
  password!: string;

  constructor(private router: Router, private alercontroller: AlertController) { }
  
  ngOnInit() {
  }

  validarLogin() {
    //Validaciones de formato (Correo)
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) { 
      const titulo = "Correo Electronico invalido";
      const mensaje = "Ingrese correo nuevamente";
      this.alertaLogin(titulo, mensaje);
      return;
    }

    if(this.password.toString().length < 6) { 
      const titulo = "Contraseña invalida";
      const mensaje = "Por favor, ingrese una contraseña de 6 digitos";
      this.alertaLogin(titulo, mensaje);
      return;
    }


    if(this.email == this.usuario.email && this.password == this.usuario.password) {
      this.alertaLogin('Credenciales correctas', 'Bienvenido, redirigiendo...');
      setTimeout(() => {
        this.irPagina();
      }, 400);
    }else{
      const titulo = "Credenciales incorrectas";
      const mensaje = "Por favor, ingrese sus datos nuevamente";
      this.alertaLogin(titulo, mensaje);
    }
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
    let navigationextras:NavigationExtras = {
      state:{
        usuario:this.usuario
      }
    }
    this.router.navigate(['/main'], navigationextras);
  }



}