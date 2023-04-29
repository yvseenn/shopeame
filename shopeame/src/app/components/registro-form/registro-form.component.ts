import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent {
  //variable exportada que recgemos en el html form
  public registroForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private servicioUsuario: UsuarioService) {
    this.registroForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.maxLength(25)]],
      apellidos: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }


  submit() {
    const nuevoUsuario: Usuario = {
      nombre: this.registroForm.get('nombre')?.value,
      apellidos: this.registroForm.get('apellidos')?.value,
      email: this.registroForm.get('email')?.value,
      password: this.registroForm.get('password')?.value,
    }


    this.servicioUsuario.registrar(nuevoUsuario).subscribe((resultado: any) => {
      alert("Usuario registrado")
    })

  }
}
