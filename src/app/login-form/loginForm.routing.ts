import { LoginFormComponent } from './login-form.component';
import { TablaComicsComponent } from './../tablaComics/tablaComics.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tabla', component: TablaComicsComponent },
];

export const LoginFormRoutes = RouterModule.forChild(routes);
