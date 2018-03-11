import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { appRoutes } from './routing';
import { HomeComponent } from './home/home.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BranchesComponent } from './branches/branches.component';
import { TrainerApplicationComponent } from './trainer-application/trainer-application.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { ForumPageComponent } from './forum-page/forum-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SignUpComponent,
    HomeComponent,
    AdminPageComponent,
    BranchesComponent,
    TrainerApplicationComponent,
    ClientPageComponent,
    TrainerPageComponent,
    ManagerPageComponent,
    ForumPageComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
