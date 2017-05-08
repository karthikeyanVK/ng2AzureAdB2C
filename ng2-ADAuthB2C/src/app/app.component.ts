import { Component } from '@angular/core';


declare var hello: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hellojs: any
  title = 'app works!';
  constructor() { }

  ngOnInit() {
    
  }
  
  login() {
    // var network = 'adB2CSignInSignUp';
    // debugger;
    // this.hellojs.use(network).getAuthResponse();

    // this.hellojs(network).login({ display: "page" }, null).then(function (auth) {
    //   console.log(auth);
    // }, function (e) {
    //   console.log('Signin error: ' + e.error.message);
    // });
  }
 

}
