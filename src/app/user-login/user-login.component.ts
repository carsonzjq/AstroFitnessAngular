import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INVALID } from '@angular/forms/src/model';

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
  ngOnInit() {
  }

}
