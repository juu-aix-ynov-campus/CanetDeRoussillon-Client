import { Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "../../globals/shared-service";
import { Credentials, UserDto } from "../../models/user/user.dto";
import { AuthGuard } from "../../services/checkAuth/auth-guard.service";
import { SessionStorageService } from "../../services/session/session.service";
import { userService } from "../../services/user/user.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

    user: Credentials = {}
    error: string = '';


    constructor(
        private userService: userService,
        private authGuard: AuthGuard,
        private router: Router
    ) { }

    async login() {
        if (this.user) {
            const response = await this.userService.loginUser({ ...this.user }).toPromise();
            if (!response.success) {
                console.log(response.message);
                this.error = response.message
                return;
            }
            this.error = null;
            SessionStorageService.SaveObjectInSessionStorage('connectedUser', { user: response.user, token: response.token });
            this.authGuard.isConnected(this.user.login);

            this.router.navigateByUrl('/articles');
        }

    }
}