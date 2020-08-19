import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SigninService } from '../pages/login/signin.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private signinService:SigninService){}
  canActivate():boolean {
      if(this.signinService.isAdminRights()){
        return true;
      
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
    
      
 
    
    }
    }