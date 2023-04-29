import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosAcceso } from 'src/app/interfaces/datos-acceso';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private servicioUsuario: UsuarioService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  submit() {
    const datosLogin: DatosAcceso = {
      password: this.loginForm.get('password')?.value,
      email: this.loginForm.get('email')?.value,
    }
    this.servicioUsuario.acceder(datosLogin).subscribe((resultado: any) => {

      this.servicioUsuario.guardarEnCookies(resultado.user)
      this.router.navigateByUrl('/gestion')
    })
  }


}
