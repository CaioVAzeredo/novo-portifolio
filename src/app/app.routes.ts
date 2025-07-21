import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PaginaLessenceComponent } from './paginas/pagina-lessence/pagina-lessence.component';

export const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
    },
    {
        path: 'lessence',
        component: PaginaLessenceComponent,
    }
];