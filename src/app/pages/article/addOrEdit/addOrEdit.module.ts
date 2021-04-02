import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ArticleService } from "../../../services/article/article.service";
import { SessionStorageService } from "../../../services/session/session.service";
import { AddOrEditComponent } from "./addOrEdit.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { ReferentialService } from "../../../services/referential.service";


@NgModule({
    declarations: [AddOrEditComponent],
    imports: [
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        MatSnackBarModule,
        MatDialogModule,
        MatSelectModule,
    ],
    providers: [ArticleService, SessionStorageService, ReferentialService]
})

export class AddOrEditModule {

}