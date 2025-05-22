import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // Layout sin navbar/footer (para login)
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/login/pages/login/login.page').then(m => m.LoginPage)
      }
    ]
  },
  // Layout con navbar/sidebar (protegido)
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then(m => m.DashboardPage)
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
      },
    ]
  }
];
