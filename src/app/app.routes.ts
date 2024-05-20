import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TentDetailService } from './tent-detail.service';
import { TentDetailsComponent } from './tent-details/tent-details.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { DepartamentComponent } from './departament/departament.component';
import { TypeAutoComponent } from './type-auto/type-auto.component';
import { TypeParkingComponent } from './type-parking/type-parking.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'tent/:id',
    canActivate: [authGuard],
    component: TentDetailsComponent,
  },
  {path: 'department', component: DepartamentComponent},
  {path: 'type/auto', component: TypeAutoComponent},
  {path: 'type/parking', component: TypeParkingComponent}
];
