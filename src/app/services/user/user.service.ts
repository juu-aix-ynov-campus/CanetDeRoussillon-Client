import { HttpClient, HttpClientModule } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { GetUserResponse, GetUsersResponse, UserDto } from "../../models/user/user.dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class userService {

    private url: string = 'http://localhost:3070/users';

    constructor(
        private httpClient: HttpClient
    ) { }

    loginUser(credentials: { login?: string, password?: string }): Observable<GetUserResponse> {
        return this.httpClient.post<GetUserResponse>(this.url + '/login', { ...credentials });
    }
}