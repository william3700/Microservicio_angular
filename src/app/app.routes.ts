import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ListasComponent } from './listas/listas.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'administrador', component: AdministradorComponent },
    { path: 'listas', component: ListasComponent }
];
