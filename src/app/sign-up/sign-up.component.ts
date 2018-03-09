import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
<<<<<<< HEAD
  
  onSubmit(NewUser){
    console.log(NewUser);
  }
  ngOnInit() {
  }
=======

	branches;
	private url;
	newUser = new Client();
	model = new Client();
	ngOnInit() {
		this.fetchGyms();
	}
>>>>>>> f58303239e3bcf24cc309a9c28e5362dc96aa6d0

	constructor(private http: HttpClient){

	}

	fetchGyms(){
		this.url="http://localhost:8085/AstroFitness/rest/gym/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.branches = data;
				console.log(this.branches);
			})
	}

	check(){
		console.log(this.newUser);
	}

	checkBranch(){
		console.log(this.newUser);
	}

	submit(){
		console.log(this.newUser);
		for(var x in this.branches){
			if(this.branches[x].id == this.newUser.client_gym){
				this.newUser.client_gym = this.branches[x];
				break;
			}
		}
		
		this.url = "http://localhost:8085/AstroFitness/rest/client/post/newClient";
		this.http.post(this.url, this.newUser).subscribe(
			data => {
				console.log(data);
			},
			error => {
				console.log(error);
			}
			)
	}
	submitted = false;
	onSubmit() { this.submitted = false;}
}
