import { Injectable } from '@angular/core';
import { WindowService } from './windowservice';
declare var hello: any;
@Injectable()
export class HellojsService {
  public hellojs: any
  constructor(private windowService: WindowService) {
    this.hellojs = new hello();
    var applicationId = '6d55b5fb-4fce-4688-8803-369a0dac8cc8';
    //initiate all policies
    this.hellojs.init({
      adB2CSignIn: applicationId,
      adB2CSignInSignUp: applicationId,
      adB2CEditProfile: applicationId

    }, {  
        redirect_uri: '',
        scope: 'openid ' + applicationId,
        response_type: 'token id_token'
        
      });
    // debugger;
    var adB2CSignInSignUpPolicy = this.getPolicyConfiguredData('adB2CSignInSignUp', 'B2C_1_b2c_1_sign_in_sign_up');
    this.hellojs.init(adB2CSignInSignUpPolicy)
  }
  public getAuthResponse(network) {
    return this.hellojs.use(network).getAuthResponse();
  }
  public login(network) {
    this.hellojs.use(network).login({ display: "page" }, null)
      .then(function (auth) {
        console.log(auth);
        return;
      }, function (e) {
        console.log('Signin error: ' + e.error.message);
        return;
      });
      return;
  }
  private getPolicyConfiguredData(policyName, azureAppPolicyName) {

    var tenantName = "stagesitemanager.onmicrosoft.com";
    var adB2CSignInSignUpPolicy = {};
    var redirect_uri = "http://localhost:65328/";
    adB2CSignInSignUpPolicy[policyName] = {
      name: 'Azure Active Directory B2C',
      oauth: {
        version: 2,
        auth: "https://login.microsoftonline.com/tfp/" + tenantName + "/" + azureAppPolicyName + "/oauth2/v2.0/authorize",
        grant: "https://login.microsoftonline.com/tfp/" + tenantName + "/" + azureAppPolicyName + "/oauth2/v2.0/token"
      },
      refresh: true,
      scope_delim: ' ',
      // Don't even try submitting via form.
      // This means no POST operations in <=IE9
      form: false
    }
    adB2CSignInSignUpPolicy[policyName].xhr = function (p) {
      if (p.method === 'post' || p.method === 'put') {
        //toJSON(p);
        if (typeof (p.data) === 'object') {
          // Convert the POST into a javascript object
          try {
            p.data = JSON.stringify(p.data);
            p.headers['content-type'] = 'application/json';
          } catch (e) { }
        }
      } else if (p.method === 'patch') {
        this.hellojs.utils.extend(p.query, p.data);
        p.data = null;
      }
      return true;
    };
    adB2CSignInSignUpPolicy[policyName].logout = function () {
      //get id_token from auth response
      var id_token = this.hellojs.use(policyName).getAuthResponse().id_token;
      //clearing local storage session
      this.hellojs.utils.store(policyName, null);

      //redirecting to Azure B2C logout URI
      this.windowService.window.location = "https://login.microsoftonline.com/" + tenantName + "/oauth2/v2.0/logout?p=" + azureAppPolicyName + "&id_token_hint=" +
        id_token + "&post_logout_redirect_uri=" + redirect_uri;
    };
    return adB2CSignInSignUpPolicy;
  }
}
