import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';

@Injectable()
export class UserService {

	private LoggedIn: boolean;
	private authURL: string;

	hardcodeClient = new Client("firstname", "lastname", "addresssss", "emailll", "paaaasssss");


	constructor(private http: HttpClient) {
		this.LoggedIn = false;
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

		console.log(email);
		console.log(password);
		this.setLoggedIn(true);
		return this.hardcodeClient;
	}

	setLoggedIn(x: boolean){
		this.LoggedIn = x;
	}

	getLoggedIn(){
		return this.LoggedIn;
	}
}
