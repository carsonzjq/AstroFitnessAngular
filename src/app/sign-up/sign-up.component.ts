import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private http: HttpClient){

  }

  private url = "http://localhost:8090/AstroFitness/rest/trainer/post/newTrainer";

  newUser = new User();

  check(){
  	console.log(this.newUser);
  }

  submit(){
  	this.http.post(this.url, this.newUser).subscribe(
  		data => {
  			console.log(data);
  		},
  		error => {
  			console.log(error);
  		}
  		)
  }

}
