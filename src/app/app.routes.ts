import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './core/auth.guard';
//import { PrincipalComponent } from './principal/principal.component';

export const rootRouterConfig: Routes = [
  //{ path: '',  component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'principal', component: PrincipalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }
];
