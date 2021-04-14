import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserListComponent } from "./userList.component";

@NgModule({
    declarations: [
        UserComponent,
        UserListComponent,
    ],
    imports: [
        MatIconModule,
        MatButtonModule,
        CommonModule,
        MatTableModule,
        RouterModule,
        MatSelectModule,
    ],
    exports: [
        UserComponent
    ]
})

export class UserModule {

}