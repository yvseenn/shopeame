import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackService } from 'src/app/services/back.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  id!: number;
  producto!: any;

  constructor (private service: BackService, private myId:ActivatedRoute, private router: Router) {}

  ngOnInit(): void { 
    this.myId.paramMap.subscribe((data:any) => {
      console.log(data.params.id);
      this.id= data.params.id;
    })

    this.service.getPrenda(this.id).subscribe((data:any) => {
      console.log(data);
      this.producto=data;
    })
  }

deletePrenda =() => {
  this.service.deletePrenda(this.id).subscribe((data:any) => {
    alert("Prodcuto Eliminado!");
    this.router.navigate(['/productos'])
  })
}

patchPrenda =(producto:any) => {
  this.service.patchPrenda(this.id)
  this.router.navigate(['/gestion'])
}
}