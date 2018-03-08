import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	accountType;
	branches;

	private url;

	newUser = new User();

	ngOnInit() {
		this.fetchGyms();
	}

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
		console.log(this.newUser.branch);
	}

	submit(){
		console.log(this.accountType);
		if(this.accountType == "Trainer")
			this.url = "http://localhost:8085/AstroFitness/rest/trainer/post/newTrainer";
		else if(this.accountType == "Client")
			this.url = "<Client REST>";
		else if(this.accountType == "Manager")
			this.url = "<Manager REST Link>";
		else
			return;
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
