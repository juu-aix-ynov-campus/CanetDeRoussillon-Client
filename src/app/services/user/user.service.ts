import { HttpClient, HttpClientModule } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { GetUserResponse, GetUsersResponse, UserDto } from "../../models/user/user.dto";
import { Observable } from "rxjs";
import { SessionStorageService } from "../session/session.service";

@Injectable({
    providedIn: 'root'
})

export class userService {

    private url: string = 'http://localhost:3070/api/users';

    constructor(
        private httpClient: HttpClient,
    ) { }

    loginUser(credentials: { login?: string, password?: string }): Observable<GetUserResponse> {
        return this.httpClient.post<GetUserResponse>(this.url + '/login', { ...credentials });
    }

    getUsers(): Observable<GetUsersResponse> {
        return this.httpClient.get<GetUsersResponse>(this.url, {
            headers: {
                keys: [
                    SessionStorageService.getFromSessionStorage('token')
                ],
            }
        });
    }
}