import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared-service/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];
