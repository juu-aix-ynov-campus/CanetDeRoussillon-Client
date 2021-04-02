import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { ArticleDto } from "../../models/user/article.dto";
import { UserDto } from "../../models/user/user.dto";
import { ArticleService } from "../../services/article/article.service";
import { SessionStorageService } from "../../services/session/session.service";
import { CoolDialogService } from '@angular-cool/dialogs';
import { AppValue } from "../../models/appValue.dto";
import { ReferentialService } from "../../services/referential.service";

@Component({
    selector: 'app-home',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
})
export class ArticleComponent {
    entity: UserDto;
    articleEntity: ArticleDto = {};
    articles: ArticleDto[] = [];
    subscription: Subscription;
    search?: string;

    appValues: AppValue[]
    appValueLabel: string;

    constructor(
        private articleService: ArticleService,
        private snackbar: MatSnackBar,
        private dialogService: CoolDialogService,
        private referentialService: ReferentialService,
    ) {
        this.init();
    }

    async init() {
        this.entity = await SessionStorageService.getObjectFromSessionStorage('connectedUser').user;
        this.loadArticles();
        const appValuesResponse = await this.referentialService.getAppValues();
        if (appValuesResponse)
            this.appValues = appValuesResponse.appValues;
    }
    async loadArticles() {
        const articlesResponse = await this.articleService.getArticles({
            userId: this.entity.id,
            search: this.search ? this.search : '',
            cat: this.appValueLabel ? this.appValueLabel : '',
        });
        if (articlesResponse.success) {
            this.articles = articlesResponse.articles.sort();
        }
    }

    async deleteArticle(id: string) {
        console.log(id);
        const dialogResult = await this.dialogService.showDialog({
            titleText: 'Suppression',
            questionText: 'Vous êtes sur le point de supprimer un article',
            confirmActionButtonColor: 'Warn',
            confirmActionButtonText: 'Supprimer',
            cancelActionButtonText: 'Annuler',
        })
        if (dialogResult.isConfirmed) {
            const response = await this.articleService.deleteArticle(id);
            if (response) {
                this.loadArticles();
                this.snackbar.open("L'article a bien été supprimé", null, { duration: 1000 })
            }
            console.log(response);
        }

    }

    display(appValues: AppValue[]): string {
        // console.log();
        return appValues.map(x => x.label).join('/')
    }
}