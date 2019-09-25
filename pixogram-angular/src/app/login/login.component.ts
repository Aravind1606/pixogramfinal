import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { userlogin } from '../userlogin.model';
import { user } from '../user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {


  userl: userlogin=new userlogin();
  
  userinfo: user=new user();
  ngOnInit() {
   
   
  }
  constructor(private router: Router, private userService: UserService) {

  }

  loginUser(): void {
    console.log(this.userl.username );
    console.log(this.userl.password );
   this.userService.login(this.userl)
        .subscribe( (data) => {
         
        this.userinfo=data;
        console.log("hhh");
          localStorage.setItem('userinfo', JSON.stringify(this.userinfo));
          console.log(this.userinfo.email);
         if(this.userinfo.id>0)
          {
            this.router.navigate(['s1']);
          }
          else{
            this.router.navigate(['']);
          }
            },
        error=>{
          alert("invalid credentials");
          this.router.navigate(['']);
        }
        );
      };


}
