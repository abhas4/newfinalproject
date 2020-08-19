import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantserviceService {
url="http://localhost:3000/restaurant";
  constructor(private http:HttpClient) { }
  addRestaurant(data){
    // console.log(data)
    const headers = { 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://localhost:3000/restaurant','Access-Control-Allow-Headers': 'X-Requested-With,content-type' }
    return this.http.post<any>(this.url,data,{headers: headers})
   }
   showRestaurant(){
   return this.http.get(this.url)
  }
  deleteRestaurant(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  currentRestaurant(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateRestaurant(id,data){
    return this.http.put(`${this.url}/${id}`,data)

  }
}