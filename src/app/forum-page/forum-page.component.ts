import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forum } from '../forum';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent implements OnInit {

  posts;

  private url;

  newForum = new Forum();

	constructor(private http: HttpClient){

	}

  ngOnInit() {
    this.fetchForum();
  }

  fetchForum(){
		this.url="http://localhost:8085/AstroFitness/rest/forum/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.posts = data;
				console.log(this.posts);
			})
  }
  
  submit(){
		console.log(this.newForum);
		this.newForum.comment_date = new Date().toLocaleDateString();
		this.newForum.comment_time = new Date().toLocaleTimeString().slice();

		this.url = "http://localhost:8085/AstroFitness/rest/forum/post/newForum";
		this.http.post(this.url, this.newForum).subscribe(
			data => {
				console.log(data);
			},
			error => {
				console.log(error);
			}
			)
	}

}
