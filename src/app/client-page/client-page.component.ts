import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
	selector: 'app-client-page',
	templateUrl: './client-page.component.html',
	styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

	constructor(private user: UserService) { }

	ngOnInit() {
		// console.log(this.user.getLoggedIn());
	}

}
