import { AppValue } from "../appValue.dto";
import { baseModel, GenericResponse } from "../base/base.dto";
import { Category } from "../category.dto";

export interface ArticleDto extends baseModel {
    description?: string;
    content?: string;
    userId?: string;
    appValues?: AppValue[];
}

export interface GetArticleResponse extends GenericResponse {
    article: ArticleDto;
}

export interface GetArticlesResponse extends GenericResponse {
    articles: ArticleDto[];
}

export interface GetArticleRequest {
    id?: string
    userId?: string;
    search?: string;
    cat?: string;
}
