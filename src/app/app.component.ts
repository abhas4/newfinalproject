import { Component } from '@angular/core';
import { SigninService } from './pages/login/signin.service';
import { MessagingService } from './messaging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newfinalproject';
  message;
  constructor(public signinService:SigninService,private messagingService: MessagingService){}
  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
   }
}
