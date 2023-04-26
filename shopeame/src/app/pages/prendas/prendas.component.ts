import { Component, Input } from '@angular/core';
import { Prenda } from 'src/app/interfaces/prenda';
import { BackService } from 'src/app/services/back.service';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.scss']
})
export class PrendasComponent {
listaPrendas: any[] = []; //
  constructor (private prendasService:BackService) {}

  ngOnInit(): void {
    this.prendasService.getPrendas().subscribe((data:any)=> {
      console.log(data);
      this.listaPrendas = [...data]
    }) 
}
}