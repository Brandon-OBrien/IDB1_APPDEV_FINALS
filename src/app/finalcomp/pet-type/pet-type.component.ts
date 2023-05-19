import { Component } from '@angular/core';
import{Typepet} from 'src/app/pet-type';
import{TYPEPET} from 'src/app/pet-typelist';

@Component({
  selector: 'app-pet-type',
  templateUrl: './pet-type.component.html',
  styleUrls: ['./pet-type.component.css']
})
export class PetTypeComponent {
   
  typepet=TYPEPET;
  selectedTypepet?:Typepet;

  onSelected(typepet: Typepet): void{
    this.selectedTypepet = typepet;
  }
}
