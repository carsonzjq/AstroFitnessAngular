import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
import {Client} from '../client';
import { Appointements } from '../appointements';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

   
	url = "http://localhost:8085/AstroFitness/rest/appointment/get/all" + sessionStorage.getItem("userEmail");
  
	constructor(private user: UserService, private http: HttpClient) { }
  public app =new Appointements();
	ngOnInit() {
		this.http.get(this.url).subscribe(
			data => this.app = data,
			err => console.log(err)
			)
	}
}
