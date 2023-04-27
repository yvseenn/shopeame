import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent {
 //
  public registroForm!: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.registroForm = this.formBuilder.group({
      nombre:["",[Validators.required,Validators.maxLength(25)]],
      apellido:["",[Validators.required,Validators.maxLength(50)]],
      email:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.minLength(8)]]
    })
  }


  submit(){

  }

}
