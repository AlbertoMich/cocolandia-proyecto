import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { CursosDeVeranoComponent } from './cursos-de-verano/cursos-de-verano.component';
import { SalonDeFiestasComponent } from './salon-de-fiestas/salon-de-fiestas.component';
import { CaravanasInfantilesComponent } from './caravanas-infantiles/caravanas-infantiles.component';
import { ShowsInfantilesCdmxComponent } from './shows-infantiles-cdmx/shows-infantiles-cdmx.component';


export const routes: Routes = [
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'cursos-de-verano', component: CursosDeVeranoComponent},
    {path: 'salon-de-fiestas', component: SalonDeFiestasComponent},
    {path: 'caravanas-infantiles', component: CaravanasInfantilesComponent},
    {path: 'shows-infantiles-cdmx', component: ShowsInfantilesCdmxComponent},
];
