import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CaravanasInfantilesComponent } from "../caravanas-infantiles/caravanas-infantiles.component";
import { CursosDeVeranoComponent } from "../cursos-de-verano/cursos-de-verano.component";
import { CarruselShowsComponent } from '../complementos/carrusel-shows/carrusel-shows.component';

@Component({
  selector: 'app-shows-infantiles-cdmx',
  standalone: true,
  imports: [CommonModule, FormsModule, CaravanasInfantilesComponent, CursosDeVeranoComponent, CarruselShowsComponent],
  templateUrl: './shows-infantiles-cdmx.component.html',
  styleUrl: './shows-infantiles-cdmx.component.css'
})

export class ShowsInfantilesCdmxComponent {
  shows = [
    { id: 1, nombre: 'Payacocos Show', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/34.jpg' },
    { id: 2, nombre: 'Show de Mickey Mouse', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/01.jpg' },
    { id: 3, nombre: 'Show de Bely y Beto', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/02.jpg' },
    { id: 4, nombre: 'Show de Minions', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/03.jpg' },
    { id: 5, nombre: 'Show de Frozen', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/04.jpg' },
    { id: 6, nombre: 'Show de Masha y el Oso', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/06.jpg' },
    { id: 7, nombre: 'Show de Super Mario', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/07.jpg' },
    { id: 8, nombre: 'Show de Sonic', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/08.jpg' },
    { id: 9, nombre: 'Show de Power Rangers', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/09.jpg' },
    { id: 10, nombre: 'Show de Toy Story', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/10.jpg' },
    { id: 11, nombre: 'Show de Princesas', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/11.jpg' },
    { id: 12, nombre: 'Show de Peppa Pig', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/12.jpg' },
    { id: 13, nombre: 'Show de Miraculous', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/13.jpg' },
    { id: 14, nombre: 'Show de Pocoyo', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/14.jpg' },
    { id: 15, nombre: 'Show de Pica-Pica', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/15.jpg' },
    { id: 16, nombre: 'Show de Lilo y Stitch', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/16.jpg' },
    { id: 17, nombre: 'Show de Bella y la Bestia', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/17.jpg' },
    { id: 18, nombre: 'Show de Encanto', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/18.jpg' },
    { id: 19, nombre: 'Show de Plim Plim', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/19.jpg' },
    { id: 20, nombre: 'Show de La Granja de Zenón', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/20.jpg' },
    { id: 21, nombre: 'Show de Luli Pampin', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/21.jpg' },
    { id: 22, nombre: 'Show de Avengers', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/22.jpg' },
    { id: 23, nombre: 'Show de Moana', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/23.jpg' },
    { id: 24, nombre: 'Show de Dumbo', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/24.jpg' },
    { id: 25, nombre: 'Show de Coco', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/26.jpg' },
    { id: 26, nombre: 'Show de Rugrats', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/27.jpg' },
    { id: 27, nombre: 'Show de Paw Patrol', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/28.jpg' },
    { id: 28, nombre: 'Show de Dinosaurios', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/29.jpg' },
    { id: 29, nombre: 'Show de La Casa de Muñecas de Gabby', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/30.jpg' },
    { id: 30, nombre: 'Show de La Sirenita', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/31.jpg' },
    { id: 31, nombre: 'Show de Monsters Inc', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/33.jpg' },
    { id: 32, nombre: 'Show de Circo', descripcion: 'El show incluye... Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imagen: 'img/catalogo/35.jpg' },
];



  showSeleccionado: any = null;
  contacto = { nombre: '', telefono: '', codigoPostal: '' };
  numeroWhatsApp = '+525569177598';
  cargando = false; 

  mostrarDetalles(show: any) {
    this.showSeleccionado = show;
  }

  cerrarFormulario() {
    this.showSeleccionado = null;
  }

  enviarMensaje(formulario: NgForm) {
    if (formulario.valid) {
      const clienteTelefono = /^\d{10}$/;
      const clienteCodigoPostal = /^\d{5}$/;
  
      if (!clienteTelefono.test(this.contacto.telefono)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
      }
  
      if (!clienteCodigoPostal.test(this.contacto.codigoPostal)) {
        alert('Por favor, ingresa un código postal válido.');
        return;
      }
  
      if (this.showSeleccionado) {
        this.cargando = true;
  
        const enlaceGoogleMaps = `https://www.google.com/maps/search/?api=1&query=${this.contacto.codigoPostal}`;
        
        // Reemplaza <br> con un espacio
        const descripcionLimpiada = this.showSeleccionado.descripcion.replace(/<br\s*\/?>/g, ' ');
  
        const mensaje = `Hola, estoy interesado(a) en cotizar el "${this.showSeleccionado.nombre}". 
        Descripción: ${descripcionLimpiada}. 
        Mi nombre es ${this.contacto.nombre}, mi teléfono es ${this.contacto.telefono} y mi código postal es ${enlaceGoogleMaps}. 
        ¿Podrían enviarme más detalles?`;
        
        const mensajeCodificado = encodeURIComponent(mensaje);
        const enlaceWhatsApp = `https://wa.me/${this.numeroWhatsApp}?text=${mensajeCodificado}`;
         
        setTimeout(() => {
          window.location.href = enlaceWhatsApp;
          this.cargando = false;
          formulario.resetForm(); 
          this.cerrarFormulario(); 
        }, 2000); 
      }
    } else {
      alert('Por favor, completa todos los datos para poder hacer tu cotización.');
    }
}



}
