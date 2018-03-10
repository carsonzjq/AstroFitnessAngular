import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ServicesService} from './services.service'
import { AdminLoginComponent } from './admin-login/admin-login.component';
=======
>>>>>>> f58303239e3bcf24cc309a9c28e5362dc96aa6d0
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { appRoutes } from './routing';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ClubLocationComponent } from './home/club-location/club-location.component';
import { ClientUiComponent } from './client-ui/client-ui.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
=======
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BranchesComponent } from './branches/branches.component';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
>>>>>>> f58303239e3bcf24cc309a9c28e5362dc96aa6d0

import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignUpComponent,
    HomeComponent,
<<<<<<< HEAD
    ClubLocationComponent,
    ClientUiComponent,
    NavComponent,
    FooterComponent
=======
    AdminPageComponent,
    BranchesComponent,
    TrainerApplicationComponent,
    ClientPageComponent,
    TrainerPageComponent,
<<<<<<< HEAD
    ManagerPageComponent
>>>>>>> f58303239e3bcf24cc309a9c28e5362dc96aa6d0
=======
    ManagerPageComponent,
    HeaderComponent,
    FooterComponent
>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule


  ],
<<<<<<< HEAD
  providers: [ServicesService],
=======
  providers: [UserService, AuthGuard],
>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2
  bootstrap: [AppComponent]
})
export class AppModule { }
