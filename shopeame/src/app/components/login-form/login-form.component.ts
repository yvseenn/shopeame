import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  registroForm!: FormGroup; // agregamos registroForm
  containerClass = 'container';

  constructor(
    private formBuilder: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.registroForm = this.formBuilder.group({ // inicializamos registroForm
      nombre: ['', [Validators.required, Validators.maxLength(25)]],
      apellidos: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  submit() {
    const datosLogin = {
      password: this.loginForm.get('password')?.value,
      email: this.loginForm.get('email')?.value
    };

    this.servicioUsuario.acceder(datosLogin).subscribe((resultado: any) => {
      this.servicioUsuario.guardarEnCookies(resultado.user);
      this.router.navigateByUrl('/gestion');
    });
  }

  registroSubmit() { // agregamos el método para el submit de registro
    const nuevoUsuario: Usuario = {
      nombre: this.registroForm.get('nombre')?.value,
      apellidos: this.registroForm.get('apellidos')?.value,
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value
    };

    this.servicioUsuario.registrar(nuevoUsuario).subscribe((resultado: any) => {
      alert('Usuario registrado');
    });
  }

  toggleContainerClass() {
    if (this.containerClass === 'container') {
      this.containerClass = 'container right-panel-active';
    } else {
      this.containerClass = 'container';
    }
  }

}