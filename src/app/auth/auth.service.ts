import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedIn:BehaviorSubject<boolean>=new BehaviorSubject(false);
get isLoggedIn(){
  return this.loggedIn.asObservable();
}
  constructor(private router:Router) { }

// login(user){
//   if(user.email!=='' && user.password!==''){
//     this.loggedIn.next(true);
//     this.router.navigate(['/home'])
//   }
// }
// logout(){
//   debugger;
//   this.loggedIn.next (false);
//   this.router.navigate(['/login']);
// }

}