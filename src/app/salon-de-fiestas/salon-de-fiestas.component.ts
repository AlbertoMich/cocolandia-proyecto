import { Component } from '@angular/core';
import { PieDePaginaComponent } from '../complementos/pie-de-pagina/pie-de-pagina.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-salon-de-fiestas',
  standalone: true,
  imports: [PieDePaginaComponent, CommonModule ],
  templateUrl: './salon-de-fiestas.component.html',
  styleUrl: './salon-de-fiestas.component.css'
})
export class SalonDeFiestasComponent {
  modalAbierto = false;
  imagenSeleccionada: string = '';

  paquetes = [
    { nombre: 'Paquete 1', imagen: '/salon/renta_salon.jpg' },
    { nombre: 'Paquete 2', imagen: '/salon/Paquete_Galactico.jpg' },
    { nombre: 'Paquete 3', imagen: '/salon/Paquete_Estelar.jpg' },
  ];

  abrirModal(imagen: string) {
    this.imagenSeleccionada = imagen;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  servicios = [
    { imagen: '/salon/Servicios_Adicionales_01.jpg' },
    { imagen: '/salon/Servicios_Adicionales_02.jpg' }
    
];

}
