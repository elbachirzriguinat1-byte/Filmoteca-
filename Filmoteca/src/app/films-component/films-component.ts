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


  
 Films_list = [
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
  },
  {
    id: 7,
    titol: 'Jurassic Park',
    director: 'Steven Spielberg',
    any: 1993,
    durada: 127,
    genere: 'Aventura / Ciencia ficción',
    valoracio: 8.2,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/oU7Oq2kW5D4W6g0D4W6g0D4W6g0.jpg'
  },
  {
    id: 8,
    titol: 'The Matrix',
    director: 'Lana y Lilly Wachowski',
    any: 1999,
    durada: 136,
    genere: 'Ciencia ficción / Acción',
    valoracio: 8.7,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    id: 9,
    titol: 'Forrest Gump',
    director: 'Robert Zemeckis',
    any: 1994,
    durada: 142,
    genere: 'Drama / Romance',
    valoracio: 8.8,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
  },
  {
    id: 10,
    titol: 'The Lion King',
    director: 'Roger Allers y Rob Minkoff',
    any: 1994,
    durada: 88,
    genere: 'Animación / Aventura',
    valoracio: 8.5,
    disponible: false,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg'
  },
  {
    id: 11,
    titol: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    any: 1994,
    durada: 154,
    genere: 'Crimen / Drama',
    valoracio: 8.9,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
  },
  {
    id: 12,
    titol: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    any: 1994,
    durada: 142,
    genere: 'Drama',
    valoracio: 9.3,
    disponible: true,
    cartellUrl: 'https://image.tmdb.org/t/p/w500/9cq4R4nD5j6j7j8j9j0j.jpg'
  }
];
  carrito :Pelicula [] = [] ; 
  
  
  Afegir_al_carret(film :any) {
    this.carrito.push(film) ; 
  }

}
