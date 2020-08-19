import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddRestaurantComponent } from './pages/add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './pages/list-restaurant/list-restaurant.component';
import { UpdateComponent } from './pages/update/update.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthGuard } from './auth/auth.guard';
import { AddFieldComponent } from './pages/add-field/add-field.component';


const routes: Routes = [
  {path:'',pathMatch:'full',component:DashboardComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-restaurant',component:AddRestaurantComponent,canActivate:[AuthGuard]},
  {path:'list-restaurant',component:ListRestaurantComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'add-field',component:AddFieldComponent},
  {path:'contact',component:ContactComponent},
  {path:'update/:id',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,LoginComponent,DashboardComponent,PageNotFoundComponent,ListRestaurantComponent,AddRestaurantComponent,UpdateComponent,HomeComponent,ContactComponent,AddFieldComponent]