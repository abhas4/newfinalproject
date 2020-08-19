import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userForm:FormGroup
  isSubmitted: boolean;
  constructor(private fb:FormBuilder,private registerService:RegisterService,private route:Router ) {
this.userForm=this.fb.group({
  fname:['',[Validators.required, Validators.minLength(2)]],
  lname:['',[Validators.required, Validators.minLength(2)]],
  email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  address:['',Validators.required],
  mobile:['',[Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]+$')]],
  password:['']
});
   }

  ngOnInit(): void {
  }
  get errorControl() {
    return this.userForm.controls;
  }
onSubmit(){
  this.isSubmitted = true;
  if (!this.userForm.valid) {
    console.log('Please provide all the required values!')
    return false;
  } else {
    console.log(this.userForm.value)
  }
console.log(this.userForm.value)
  this.registerService.register(this.userForm.value).subscribe(response=>{
    // alert('login')
     if(response){

       console.log(response);
       this.route.navigate(['/dashboard']);
   }
  })
  // console.log(this.userForm.value)
}
}
