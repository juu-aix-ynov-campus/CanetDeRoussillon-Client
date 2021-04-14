import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ArticleDto, GetArticleRequest, GetArticleResponse, GetArticlesResponse } from "../../models/user/article.dto";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private url = 'http://localhost:3070/api/article';

    constructor(
        private httpClient: HttpClient
    ) { }

    async getArticles(request: GetArticleRequest): Promise<GetArticlesResponse> {
        const response = await this.httpClient.get<GetArticlesResponse>(this.url, { params: { ...request } }).toPromise();
        return response;
    }

    async getArticle(request: GetArticleRequest): Promise<GetArticleResponse> {
        const response = await this.httpClient.get<GetArticleResponse>(`${this.url}/${request.id}`).toPromise();
        return response;
    }

    async addArticle(articleDto: ArticleDto): Promise<GetArticleResponse> {
        return await this.httpClient.post<GetArticleResponse>(this.url, { ...articleDto }).toPromise();
    }

    async deleteArticle(id: string) {
        return await this.httpClient.delete(this.url, { params: { id } }).toPromise();
    }

}