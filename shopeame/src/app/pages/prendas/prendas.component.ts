import { Component, Input } from '@angular/core';
import { Prenda } from 'src/app/interfaces/prenda';

@Component({
  selector: 'app-prendas',
  templateUrl: './prendas.component.html',
  styleUrls: ['./prendas.component.scss']
})
export class PrendasComponent {
  @Input() public prenda!: Prenda
}
