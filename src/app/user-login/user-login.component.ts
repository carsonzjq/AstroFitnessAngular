import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { INVALID } from '@angular/forms/src/model';
=======
import { UserService } from '../user.service';
import { Router } from '@angular/router';
>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2

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

<<<<<<< HEAD
  constructor(private http: HttpClient) { }
  onSubmit(user){
    console.log(user)
    this.authenticate(user);
    console.log("http://localhost:8085/AstroFitness/Authenticate?name="+this.client.FirstName+"&username="+this.client.username);
  }
  public authenticate(user){
    this.http.post("http://localhost:8085/AstroFitness/Authenticate",user).subscribe(
      data=>{this.client.FirstName=data["name"];
            this.client.username=data["username"]},
          eroor=>{{"INVALID"}}
          )
  
    }
=======
  constructor(private router: Router, private user: UserService) { }

  private email: string;
  private password: string;

>>>>>>> 33e86bcaee1d55820cfd341ccc9b9811f90209b2
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