import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShowsInfantilesCdmxComponent } from "./shows-infantiles-cdmx/shows-infantiles-cdmx.component";
import { CursosDeVeranoComponent } from "./cursos-de-verano/cursos-de-verano.component";
import { PieDePaginaComponent } from './complementos/pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ShowsInfantilesCdmxComponent, CursosDeVeranoComponent, PieDePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'cocolandia';
}