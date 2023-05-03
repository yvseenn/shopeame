import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { BackService } from 'src/app/services/back.service';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  productsForm!: FormGroup;
  productId!: number;


  constructor(private servicio: BackService, private form: FormBuilder) { }
  public newProduct = this.servicio.prendaInfo
  ngOnInit(): void {
    this.productsForm = this.form.group({

      nombre: [
        this.newProduct.nombre, [Validators.required, Validators.minLength(5)],
      ],
      descripcion: [
        this.newProduct.descripcion, [Validators.required, Validators.minLength(5)],
      ],
      imagen: [
        this.newProduct.imagen, [Validators.required, Validators.minLength(5)],
      ],
      precio: [
        this.newProduct.descripcion, [Validators.required, Validators.minLength(2)],
      ],
      stock: [
        this.newProduct.descripcion, [Validators.required, Validators.minLength(1)],
      ],
    })
    this.productsForm.valueChanges.subscribe((changes) => {
      this.newProduct = changes;
    })
  }
  onSubmit = () => {
    this.servicio.postPrenda(this.newProduct).subscribe()

  }

  onDelete() {
    this.servicio.deleteProduct(this.productId).subscribe(
      // () => {
      //   alert('Producto eliminado');
      // },
      // (error) => {
      //   console.log('Error al eliminar el producto:', error);
      // }
      )

      }

}