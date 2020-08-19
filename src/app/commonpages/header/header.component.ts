import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import{Location} from "@angular/common";
import { Router } from "@angular/router";
import { SigninService } from 'src/app/pages/login/signin.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:any;
  isHome =false;
  route:string;

  constructor(private authService:AuthService,public signinService:SigninService, public router:Router,location:Location) {
    router.events.subscribe(val=>{
      if(location.path()!=""){
        this.route = location.path();
      }
      else{
        this.route = "/register";
      }
      if(this.route ==='/' || this.route==='/contact' || this.route==='/dashboard'){
        this.isHome=true;
      }
      else{
        this.isHome=false;
      }
    });
   }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(x=>{
      this.isLoggedIn=x
    });
  }
onLogout(){
  this.signinService.logout();
  
}
}
