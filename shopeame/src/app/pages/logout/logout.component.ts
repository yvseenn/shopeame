import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  //sirve para ejecutar algo quando se carga la pagina
  //set timeout ejecuta algo pasado un tiempo

  constructor(private servicioUsuario: UsuarioService,private router: Router){

  }

  ngOnInit(){
    setTimeout(()=>{
      this.servicioUsuario.salir()
      this.router.navigateByUrl("/login")
    },2000)
  }

}
