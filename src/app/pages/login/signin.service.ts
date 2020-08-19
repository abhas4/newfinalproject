import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
url='https://reqres.in/api/login'
  constructor(private http:HttpClient,private route:Router) { }
Login(user:any){
  const headers = { 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'url','Access-Control-Allow-Headers': 'X-Requested-With,content-type' }

  
return this.http.post<any>(this.url,user,{headers: headers});

}
isAdminRights(){
  return !!localStorage.getItem('token')
}
logout(){
  debugger;
 
 
  localStorage.removeItem('token');
  this.route.navigate(['/dashboard']);
}
}

