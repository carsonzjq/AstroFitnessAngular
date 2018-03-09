import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { ServicesService} from './services.service'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { appRoutes } from './routing';
import { ForgetPuComponent } from './forget-pu/forget-pu.component';
import { HomeComponent } from './home/home.component';
import { ClubLocationComponent } from './home/club-location/club-location.component';
import { ClientUiComponent } from './client-ui/client-ui.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    SignUpComponent,
    ForgetPuComponent,
    HomeComponent,
    ClubLocationComponent,
    ClientUiComponent,
    NavComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule


  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
