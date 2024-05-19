import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TentDetailService } from './tent-detail.service';
import { TentDetailsComponent } from './tent-details/tent-details.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'tent/:id',
    canActivate: [authGuard],
    component: TentDetailsComponent,
  },
];
