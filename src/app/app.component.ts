import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cocktails-client';

  isAuthenticated: boolean;
  public userName: string;

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated),
    );
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // returns an array of claims
    const userClaims = await this.oktaAuth.getUser();

    if (userClaims == null) {
      return;
    }

    // user name is exposed directly as property
    this.userName = userClaims.name;
  }

  public login() {
    this.oktaAuth.loginRedirect('/');
  }

  public async logout() {
    await this.oktaAuth.logout('/');
  }
}
