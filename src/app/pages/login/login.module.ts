import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { userService } from "../../services/user/user.service";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [userService]
})

export class LoginModule {

}