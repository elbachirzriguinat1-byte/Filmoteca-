import { Component } from '@angular/core';
import { FilmsHijoComponent } from '../films-hijo-component/films-hijo-component';
import {Pelicula} from '../interficies/Pellicula';

@Component({
  imports: [FilmsHijoComponent],
  selector: 'app-films-component',
  styleUrl: './films-component.css',
  templateUrl: './films-component.html',
})
export class FilmsComponent {


  
  
Films_list:Pelicula [] = [
  {
    id: 1,
    titol: 'Interstellar',
    director: 'Christopher Nolan',
    any: 2014,
    durada: 169,
    genere: 'Ciencia ficción',
    valoracio: 8.7,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    id: 2,
    titol: 'Inception',
    director: 'Christopher Nolan',
    any: 2010,
    durada: 148,
    genere: 'Ciencia ficción / Acción',
    valoracio: 8.8,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg'
  },
  {
    id: 3,
    titol: 'Titanic',
    director: 'James Cameron',
    any: 1997,
    durada: 195,
    genere: 'Romance / Drama',
    valoracio: 7.9,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kM1sA5nJ2v0.jpg'
  },
  {
    id: 4,
    titol: 'The Dark Knight',
    director: 'Christopher Nolan',
    any: 2008,
    durada: 152,
    genere: 'Acción / Drama',
    valoracio: 9.0,
    disponible: false,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    id: 5,
    titol: 'Avatar',
    director: 'James Cameron',
    any: 2009,
    durada: 162,
    genere: 'Ciencia ficción / Aventura',
    valoracio: 7.9,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg'
  },
  {
    id: 6,
    titol: 'Gladiator',
    director: 'Ridley Scott',
    any: 2000,
    durada: 155,
    genere: 'Acción / Drama histórico',
    valoracio: 8.5,
    disponible: false,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg'
  }
];

  carrito :any [] = [] ; 


  Afegir_al_carret(films :any) {
    this.carrito.push(films) ; 

  }

}
