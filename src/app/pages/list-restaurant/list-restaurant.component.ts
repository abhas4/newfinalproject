import { Component, OnInit } from '@angular/core';
import { RestaurantserviceService } from 'src/app/restaurantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
collection:any=[];
  constructor(private route:Router ,private restaurantService:RestaurantserviceService) { }

  ngOnInit(): void {
   
 
   this.restaurantService.showRestaurant().subscribe(response=>{
     this.collection=response;
   }) 
  }
  toUpdate(id:number){
    this.route.navigate(['/update',id])
    console.log(id);
  }
toDelete(id){
  // console.log(this.collection)
  this.collection.splice(id-1,1)
  this.restaurantService.deleteRestaurant(id).subscribe(response=>{
    //  console.log(response)
  });
}
}
