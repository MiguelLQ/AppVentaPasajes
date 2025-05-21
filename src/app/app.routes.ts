import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'vehiculos',
    loadChildren: () =>
      import('./features/vehiculos/vehiculos.routes').then(m => m.routes),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./features/usuario/usuario.routes').then(m => m.routes),
  }


];