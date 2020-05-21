import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { MatButtonModule } from '@angular/material/button';

const oktaConfig = {
  clientId: '0oaclzf69sveYfurb4x6',
  issuer: 'https://dev-991339.okta.com/oauth2/default',
  redirectUri: `${window.location.protocol}//${window.location.host}/implicit/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OktaAuthModule,
    MatButtonModule,
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
