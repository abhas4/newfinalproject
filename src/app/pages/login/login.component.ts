import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup
  constructor(private toastr: ToastrService, private fb: FormBuilder, private authService: AuthService, private signinService: SigninService, private route: Router) { }
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  OnLogin() {
    // alert('login')
    this.signinService.Login(this.signinForm.value).subscribe(response => {
      if (response) {
        this.route.navigate(['/home']);
        localStorage.setItem('token', response.token);
        console.log(response)
      }
    });

  }
}
