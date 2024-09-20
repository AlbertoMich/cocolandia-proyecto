import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carrusel-shows',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './carrusel-shows.component.html',
  styleUrl: './carrusel-shows.component.css'
})
export class CarruselShowsComponent {
  imagenes: string[] = [
    'https://i.ytimg.com/vi/V0XLTWKDOXs/maxresdefault.jpg',
    
  ];
  indiceActual: number = 0;

  ngOnInit() {
    this.iniciarCarrusel();
  }

  iniciarCarrusel() {
    setInterval(() => {
      this.siguiente();
    }, 5000); 
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
 
}
