import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    { path: 'login', component: LogInComponent },
    { path: 'signup', component: SignUpComponent }
];
