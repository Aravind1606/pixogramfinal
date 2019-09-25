import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../user.model';
import { BlockedService } from '../blocked.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blocked-accounts',
  templateUrl: './blocked-accounts.component.html',
  styleUrls: ['./blocked-accounts.component.scss']
})
export class BlockedAccountsComponent implements OnInit {

  constructor(private router: Router,private httpClient: HttpClient,private rest2:BlockedService) { }

  userinfo2: user=new user();
  userinfo1: any=[];
 
  ngOnInit() {
    if (localStorage.getItem("userinfo") === null) {
      this.router.navigate(['']);

    }
    this.getblocked();
  }
  getblocked(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
   
    this.rest2.getblocked(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);
  }

   unblockuser(id: string)
  {

    const uploadData2 = new FormData();
    
    this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
  uploadData2.append('blockedname',id);

  console.log(id);
  
  uploadData2.append('username', this.userinfo1.username);
 
 

  console.log(this.userinfo1.username);
    this.httpClient.post('http://localhost:9088/blocked/delete', uploadData2)
    .subscribe((data)=> {
      alert("unblocked successfully.");
    
      window.location.reload();
    });
   



}

}
