import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppValue, GetAppValuesResponse } from "../models/appValue.dto";

export const url = 'http://localhost:3070/api/referential';


@Injectable({
    providedIn: 'root'
})

export class ReferentialService {

    constructor(
        private httpClient: HttpClient
    ) {

    }

    async getAppValues(): Promise<GetAppValuesResponse> {
        const appValueResponse = await this.httpClient.get<GetAppValuesResponse>(`${url}/appvalue`).toPromise();
        return appValueResponse;
    }

}