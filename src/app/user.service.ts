import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';

@Injectable()
export class UserService {

	private LoggedIn: boolean;
	private authURL: string;

	client = new Client();


	constructor(private http: HttpClient) {
		this.updateLoggedIn();
	}

	login(email: string, password: string){
		// return this.http.post(this.authURL,{}).subscribe(
		// 	res =>{
		// 		if(res != null){
		// 			this.setLoggedIn(true);
		// 			return res;
		// 		}

		// 	},
		// 	err =>{
		// 		console.log(err);
		// 	}
		// 	)

		console.log(this.client.email = email);
		sessionStorage.setItem("userEmail", this.client.email);
		this.setLoggedIn(true);
		
		return this.client;
	}

	logout(){
		sessionStorage.clear();
		this.updateLoggedIn();
	}

	setLoggedIn(x: boolean){
		this.LoggedIn = x;
	}

	getLoggedIn(){
		return this.LoggedIn;
	}

	updateLoggedIn(){
		if(sessionStorage.getItem("userEmail") != null)
			this.setLoggedIn(true);
		else
			this.setLoggedIn(false);
	}
}
