import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-films-hijo-component',
  styleUrl: './films-hijo-component.css',
  templateUrl: './films-hijo-component.html',
})
export class FilmsHijoComponent {
@Input() Films : any ; 
@Output() Agregar = new EventEmitter<any> ; 



Afegir_al_carret(){
 this.Agregar.emit(this.Films) ; 

}

}
