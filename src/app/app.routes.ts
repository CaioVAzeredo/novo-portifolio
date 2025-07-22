import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PaginaLessenceComponent } from './paginas/pagina-lessence/pagina-lessence.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',  // Adicionado para garantir match exato
        component: PrincipalComponent,
    },
    {
        path: 'lessence',
        component: PaginaLessenceComponent,
    },
    // Rota para páginas não encontradas (opcional)
    { 
        path: '**', 
        redirectTo: ''  // Redireciona para a página principal
    }
];