import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantserviceService } from 'src/app/restaurantservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm: any;
  constructor(private route:Router ,private fb:FormBuilder,private router:ActivatedRoute,private restaurantService:RestaurantserviceService) { 
    this.updateForm = this.fb.group({
      restaurants:[''],
      email:[''],
      location:['']
    });
  }

  ngOnInit(): void {
       console.log(this.router.snapshot.params.id)
   this.restaurantService.currentRestaurant(this.router.snapshot.params.id).subscribe(response=>{
    //  console.log(response);
     this.updateForm = this.fb.group({
      restaurants:[response['restaurants']],
      email:[response['email']],
      location:[response['location']]
    });
   })
  }
 toUpdate(){
  //  console.log(this.updateForm.value)
  this.restaurantService.updateRestaurant(this.router.snapshot.params.id,this.updateForm.value).subscribe(result=>{
    console.log(result)
    this.route.navigate(['/list-restaurant'])
  })
 }
}
