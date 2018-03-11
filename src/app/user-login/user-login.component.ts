import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public  client={
    username:"",
    lastName:"",
    FirstName:"",
    email:""
  }

  constructor(private router: Router, private user: UserService) { }

  private email: string;
  private password: string;
  private invalidCredential: boolean;

  ngOnInit() {
    console.log(this.user.getLoggedIn());
    this.invalidCredential = false;
  }

  loginUser(e){
  	e.preventDefault();
    var x = this.user.loginClient(this.email, this.password);
    var client;
    console.log(x);

    x.subscribe(
      res =>{
        client = res;
        if(client != null){
          this.user.setLoggedIn(true);
          sessionStorage.setItem("userEmail", client.email);
          this.router.navigate(['client-page']);
        }
        else{
          // console.log("login failed. Email or password is not correct.");
          this.invalidCredential = true;
        }
        
      },
      err =>{
        console.log(err);
      }
      );
  }

}