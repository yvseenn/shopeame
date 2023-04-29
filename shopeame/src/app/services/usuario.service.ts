import { Usuario } from 'src/app/interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DatosAcceso } from '../interfaces/datos-acceso';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  registrar(nuevoUsuario: Usuario) {
    return this.http.post('http://localhost:3000/register', nuevoUsuario);
  }

  acceder(datos: DatosAcceso) {
    return this.http.post('http://localhost:3000/login', datos);
  }

  //Logout
  salir() {
    this.cookies.delete('_user')
  }

  guardarEnCookies(Usuario: Usuario): void {
    this.cookies.set('_user', JSON.stringify(Usuario))
  }

  estaLoggeado(): boolean {
    const existe: boolean = this.cookies.check('_user')
    return existe
  }

  sacarDeCookies(): Usuario {
    const valor: string = this.cookies.get('_user')
    const usuario: Usuario = JSON.parse(valor)
    return usuario
  }
}
