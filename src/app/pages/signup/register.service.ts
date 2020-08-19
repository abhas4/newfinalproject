import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import   axios from 'axios';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
url="http://localhost:3000/register";
  constructor(private http:HttpClient) { }
register(user){
//   const res=JSON.stringify(user)
//   axios.defaults.headers = {
//     'Content-Type': 'application/json'
// }
//   return axios.post<any>(this.url, res)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  const headers = { 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'https://reqres.in/api/register','Access-Control-Allow-Headers': 'X-Requested-With,content-type' }

  
return this.http.post<any>(this.url,user,{headers: headers});
}

}


