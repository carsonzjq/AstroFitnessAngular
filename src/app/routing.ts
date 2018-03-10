import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
=======
import { BranchesComponent } from './branches/branches.component';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';
<<<<<<< HEAD
>>>>>>> f58303239e3bcf24cc309a9c28e5362dc96aa6d0
=======
import { ClientPageComponent } from './client-page/client-page.component';
import { AuthGuard } from './auth.guard';
>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2
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
<<<<<<< HEAD
        path: 'nav',
        component: NavComponent
=======
        path: 'client-page',
        canActivate: [AuthGuard],
        component: ClientPageComponent
>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2
    },
    {
        path: '**', 
        redirectTo: './home',
        pathMatch: 'full'
    }
]