import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from './client';

@Injectable()
export class UserService {

	private LoggedIn: boolean;
	private authURL: string;

	constructor(private http: HttpClient, private router: Router) {
		this.updateLoggedIn();
	}

	loginClient(email: string, password: string){
		this.authURL = "http://localhost:8085/AstroFitness/rest/client/authenticate";
		var client = new Client();
		client.email = email;
		client.password = password;

		return this.http.post(this.authURL, client);
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
