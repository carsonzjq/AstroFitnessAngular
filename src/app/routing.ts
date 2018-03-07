import { Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserLoginComponent} from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
export const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'admin-login', 
        component: AdminLoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'user-login',
        component: UserLoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**', 
        redirectTo: './home',
        pathMatch: 'full'
    }
]