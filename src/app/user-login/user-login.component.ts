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

  ngOnInit() {
    console.log(this.user.getLoggedIn());
  }

  loginUser(e){
  	e.preventDefault();
  	console.log(this.email);
  	console.log(this.password);
  	if (this.user.login(this.email, this.password) != null){
  		this.router.navigate(['client-page']);
  	}
  	else{
  		console.log("login failed. Email or password is not correct.");
  	}
  }

}