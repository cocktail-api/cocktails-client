import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-secure',
  template: `
    <!-- Container to inject the Sign-In Widget -->
    <div id="okta-signin-container"></div>
  `
})
export class LoginComponent {
  signIn;
  widget = new OktaSignIn({
    baseUrl: 'https://dev-991339.okta.com',
    authParams: {
      pkce: true,
      scopes: ['openid', 'email', 'profile']
    },
    idps:[
        { type: 'google', id: '0oacy9dmuH71f5nE24x6' }
    ],
    idpDisplay: "PRIMARY",
    clientId: '0oaclzf69sveYfurb4x6',
    redirectUri: `${window.location.protocol}//${window.location.host}/implicit/callback`,

  });

  constructor(oktaAuth: OktaAuthService, router: Router) {
    this.signIn = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        switch(event.url) {
          case '/login':
            break;
          default:
            this.widget.remove();
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.widget.renderEl({
          el: '#okta-signin-container'},
        (res) => {
          if (res.status === 'SUCCESS') {
            this.signIn.loginRedirect('/', { sessionToken: res.session.token });
            // Hide the widget
            this.widget.hide();
          }
        },
        (err) => {
          throw err;
        }
    );
  }
}
