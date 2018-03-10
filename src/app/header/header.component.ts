import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private loggedIn;

	constructor(private user: UserService) { 
		this.loggedIn = this.user.getLoggedIn();
	}

	ngOnInit() {
	}

	ngDoCheck(){
		this.user.updateLoggedIn();
		this.loggedIn = this.user.getLoggedIn();
	}

	logout(){
		this.user.logout();
	}
}
