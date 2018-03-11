import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  trainers;
	private url;
  constructor(private http: HttpClient, private router: Router){

	}

  ngOnInit() {
  }

  fetchTrainers(){
		this.url="http://localhost:8085/AstroFitness/rest/appointment/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.trainers = data;
				console.log(this.trainers);
			})
	}

}
