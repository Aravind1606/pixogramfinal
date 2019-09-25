import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { user } from '../user.model';
import { FollowService } from '../follow.service';

@Component({
  selector: 'app-myfollowers',
  templateUrl: './myfollowers.component.html',
  styleUrls: ['./myfollowers.component.scss']
})
export class MyfollowersComponent implements OnInit {

  constructor(private router: Router,private httpClient: HttpClient,private rest2:FollowService) { }
  userinfo2: user=new user();
  userinfo1: any=[];
  ngOnInit() {
    if (localStorage.getItem("userinfo") === null) {
      this.router.navigate(['']);

    }
    this.getmyfollow();
  }

  getmyfollow(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
    this.rest2.getmyfollowers(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);
  }
 
}
