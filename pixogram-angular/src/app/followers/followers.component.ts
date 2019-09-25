import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private router: Router,private rest:UserService,private httpClient: HttpClient,private rest2:FollowService) { }
  userinfo2: user=new user();
  userinfo1: any=[];
  ngOnInit() {
    if (localStorage.getItem("userinfo") === null) {
      this.router.navigate(['']);

    }

    this.getfollowers();
  }

  getfollowers(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
    this.rest2.getfollowers(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);


    
  }
  
  unfollow(id: string)
  {

    const uploadData = new FormData();
    this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
  uploadData.append('followername',id);
  uploadData.append('username', this.userinfo1.username);
    this.httpClient.post('http://localhost:9085/follow/delete', uploadData)
    .subscribe((data)=> {
      alert("UnFollowed successfully.");
    
      window.location.reload();
    });



}
}
