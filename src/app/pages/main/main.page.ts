import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  
  usuario: any;

  constructor(private router:Router, private activedroute:ActivatedRoute) {
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


  irPagina(){
    let navigationextras:NavigationExtras = {
      state:{
        usuario:this.usuario
      }
    }
    this.router.navigate(['/perfil'], navigationextras);
  }

}
