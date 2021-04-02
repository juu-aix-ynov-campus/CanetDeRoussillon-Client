import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserDto } from './models/user/user.dto';
import { AuthGuard } from './services/checkAuth/auth-guard.service';
import { SessionStorageService } from './services/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  authUser: UserDto;
  isConnected: boolean = false;

  subscription: Subscription;

  constructor(
    private authGuard: AuthGuard,
    private router: Router,
  ) {

    this.subscription = this.authGuard.getData().subscribe(x => {
      console.log(x);
      if (x)
        this.isConnected = true;
    })


    this.init();
  }
  async init() {
    const userWithToken = await SessionStorageService.getObjectFromSessionStorage('connectedUser');
    if (userWithToken) {
      this.isConnected = true;
      this.authUser = userWithToken.user;
    }

  }

  logout() {
    console.log('ok');
    if (this.authUser) {
      SessionStorageService.removeFromSessionStrorage('connectedUser');
      this.isConnected = false;
      this.router.navigateByUrl('/login');
    }
  }
}
