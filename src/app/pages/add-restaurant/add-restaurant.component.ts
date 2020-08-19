import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestaurantserviceService } from 'src/app/restaurantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  addForm: any;

  constructor(private fb:FormBuilder,private route:Router,private restaurantService:RestaurantserviceService ) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      restaurants:[''],
      email:[''],
      location:['']
    });
  }
OnAdd(){
  // console.log(this.addForm.value);
  this.restaurantService.addRestaurant(this.addForm.value).subscribe(response=>{
    this.route.navigate(['/list-restaurant']); 
        // console.log(response);
    
  })

}
}
