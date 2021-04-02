import { NgModule } from "@angular/core";
import { SessionStorageService } from "../../services/session/session.service";
import { ArticleComponent } from "./articles.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { ArticleService } from "../../services/article/article.service";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { CoolDialogsModule } from '@angular-cool/dialogs';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatCardModule,
        CommonModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatTableModule,
        RouterModule,
        MatDialogModule,
        MatSelectModule,
        CoolDialogsModule.forRoot(),
    ],
    declarations: [ArticleComponent],
    exports: [],
    providers: [SessionStorageService, ArticleService],
})
export class ArticlesModule {

}