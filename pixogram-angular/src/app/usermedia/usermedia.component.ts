import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { MediaService } from '../media.service';
import { FollowService } from '../follow.service';


@Component({
  selector: 'app-usermedia',
  templateUrl: './usermedia.component.html',
  styleUrls: ['./usermedia.component.scss']
})
export class UsermediaComponent implements OnInit {
  medias: any=[];
  constructor(private router: Router,private rest:UserService,private httpClient: HttpClient,private rest2:FollowService,private rest3:MediaService) { }

  ngOnInit() {
    this.myMedia();
  }

  myMedia(){
    
    this.medias=[];
    this.rest3.myMedia(localStorage.getItem('usermedia')).subscribe((data)=>this.medias=data);

  }

}
