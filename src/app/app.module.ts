import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import{ToastrModule} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { RegisterService } from './pages/signup/register.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './commonpages/header/header.component';
import { FooterComponent } from './commonpages/footer/footer.component';
import { RestaurantserviceService } from './restaurantservice.service';
import { UpdateComponent } from './pages/update/update.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddFieldComponent } from './pages/add-field/add-field.component';
import { from } from 'rxjs';


import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { MessagingService } from './messaging.service';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   HeaderComponent,
   FooterComponent,
   HomeComponent,
   ContactComponent,
   AddFieldComponent,
   
   
   
 

  ],
  imports: [
    AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [RegisterService,RestaurantserviceService,AuthGuard,AuthService,MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
