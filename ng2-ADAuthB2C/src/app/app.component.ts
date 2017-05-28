import { Component } from '@angular/core';
import {HellojsService} from './service/hellojs.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  constructor(private hellojs:HellojsService) { }

  ngOnInit() {
    
  }
  
  login() {
    var network = 'adB2CSignInSignUp';
    debugger;
    this.hellojs.getAuthResponse(network);
    this.hellojs.login(network);
    
  }
 

}
