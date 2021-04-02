import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { AppValue } from "../../../models/appValue.dto";
import { ArticleDto } from "../../../models/user/article.dto";
import { UserDto } from "../../../models/user/user.dto";
import { ArticleService } from "../../../services/article/article.service";
import { ReferentialService } from "../../../services/referential.service";
import { SessionStorageService } from "../../../services/session/session.service";

@Component({
    selector: 'app-addOrEdit',
    templateUrl: './addOrEdit.component.html',
    styleUrls: [],
})

export class AddOrEditComponent {
    userEntity: UserDto;

    articleEntity: Partial<ArticleDto> = {};
    idArticle: string;

    selectedAppValue: AppValue;

    appValues: Partial<AppValue>[];

    constructor(
        private articleService: ArticleService,
        private referentialService: ReferentialService,
        private snackBar: MatSnackBar,
        private router: Router,
        private route: ActivatedRoute,
    ) {

        this.idArticle = this.route.snapshot.params.id;
        this.loadUser();
        this.afterLoad();
    }

    loadUser() {
        this.userEntity = SessionStorageService.getObjectFromSessionStorage('connectedUser').user;
    }

    async afterLoad() {
        const appValueResponse = await this.referentialService.getAppValues();
        if (appValueResponse.success)
            this.appValues = appValueResponse.appValues;

        if (this.idArticle && this.idArticle !== 'new') {
            const articleResponse = await this.articleService.getArticle({ id: this.idArticle });
            if (articleResponse.success) {
                this.articleEntity = articleResponse.article;
                if (this.articleEntity && this.articleEntity.appValues) {
                    this.selectedAppValue = this.appValues.find(x => x.id === this.articleEntity.appValues[0]?.id);
                }
            }
        }
        else {
            this.articleEntity = {};
            this.articleEntity.appValues = []

        }
        console.log(this.articleEntity);
    }

    async add() {
        if (this.articleEntity) {
            if (this.userEntity)
                this.articleEntity.userId = this.userEntity.id;

            if (this.selectedAppValue) {
                this.articleEntity.appValues.push(this.selectedAppValue);
            }

            console.log(this.articleEntity);

            const response = await this.articleService.addArticle(this.articleEntity);
            if (response.success) {
                this.snackBar.open("L'article a été ajouté correctement", null, { duration: 1000 });
                this.router.navigateByUrl('/articles');
            }
        }
    }

}