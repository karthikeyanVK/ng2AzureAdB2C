import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HellojsService } from './hellojs.service';
declare var hello: any;
@Injectable()
export class AuthenticatorGuard implements CanActivate {
    
    constructor(private router: Router, private hellojs: HellojsService) {
        
    }

    canActivate() {
        var network = 'adB2CSignInSignUp';
        var response = this.hellojs.getAuthResponse(network);

        if (this.online(response)) {
            return true;
        } else {
            this.hellojs.login(network);
            return false;
        }
    }
    online(session) {
        var currentTime = (new Date()).getTime() / 1000;
        return session && session.access_token && session.expires > currentTime;
    }
}

