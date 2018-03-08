import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';
export const appRoutes: Routes = [
    {
        path: '', 
        component: HomeComponent
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
        path: 'branches',
        component: BranchesComponent
    },
    {
        path: 'trainer-application',
        component: TrainerApplicationComponent
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