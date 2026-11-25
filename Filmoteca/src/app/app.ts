import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmsComponent } from './films-component/films-component';
import { FilmsHijoComponent } from './films-hijo-component/films-hijo-component';

@Component({
  selector: 'app-root',
  imports: [FilmsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  protected readonly title = signal('Filmoteca');




}
