import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {

  constructor(private router: Router,private rest:UserService,private httpClient: HttpClient,private rest2:FollowService) { }
  userinfo2: user=new user();
  userinfo1: any=[];
  ngOnInit() {
    if (localStorage.getItem("userinfo") === null) {
      this.router.navigate(['']);

    }
    this.getfollow();
  }

  getfollow(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
    this.rest.getfollow(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);
  }

  followuser(id: string)
  {

    const uploadData = new FormData();
   
    this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
  uploadData.append('followername',id);
  uploadData.append('username', this.userinfo1.username);
    this.httpClient.post('http://localhost:9085/follow/followuser', uploadData)
    .subscribe((data)=> {
      alert("Followed successfully.");
    
      
    });

  }

  seemedia(id: string)
  {
    localStorage.setItem('usermedia', id);
    this.router.navigate(['usermedia']);

  }



  blockuser(id: string)
  {
console.log(id);

    const uploadData1 = new FormData();
    const uploadData3 = new FormData();
    const uploadData4 = new FormData();
    this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
  uploadData1.append('blockedname',id);
  uploadData3.append('followername',id);
  uploadData4.append('username',id);

  uploadData1.append('username', this.userinfo1.username);
  console.log(this.userinfo1.username);
  uploadData3.append('username', this.userinfo1.username);
  uploadData4.append('followername', this.userinfo1.username);

  this.httpClient.post('http://localhost:9085/follow/delete', uploadData3)
  .subscribe((data)=> {
   
  });
  this.httpClient.post('http://localhost:9085/follow/delete', uploadData4)
  .subscribe((data)=> {
   
  });

    this.httpClient.post('http://localhost:9088/blocked/blockuser', uploadData1)
    .subscribe((data)=> {
      alert("Blocked successfully.");
    
      
    });

   
  
  }

  
}
