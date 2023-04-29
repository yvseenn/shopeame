import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  hayUser = false

  //Asigna true o false dependiendo de si hay usuario o no
  constructor(private servicioUsuario: UsuarioService, private router: Router){
    this.hayUser = this.servicioUsuario.estaLoggeado()
  }

  ngOnInit(){
    //creamos un evento que se ejecute al principio para ver si hay un usuario logeado
    //entonces vuelve a comprobar si hay un usuario loggeado y vuelve a pintar el nav
    this.router.events.subscribe(event =>{
      if(event.constructor.name === "NavigationEnd"){
        this.hayUser = this.servicioUsuario.estaLoggeado()
      }
    })
  }

}
