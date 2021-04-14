import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FollowerDto, GetFollowers } from "../../models/follower/follower.dto";
import { GetUserResponse, GetUsersResponse } from "../../models/user/user.dto";

@Injectable({ providedIn: 'root' })
export class FollowerService {
    private url = 'http://localhost:3070/api/follower';

    constructor(
        private httpClient: HttpClient
    ) {

    }

    getFollowers(): Observable<GetFollowers> {
        return this.httpClient.get<GetFollowers>(this.url);
    }

    addFollower(followerReq: FollowerDto) {
        console.log(followerReq);
        const response = this.httpClient.post(this.url, followerReq);

        response.subscribe(x => {
            console.log(x);
        })

        return response;
    }

    getUserFromFollower(reqFollowerOf: { ids: string }): Observable<GetUsersResponse> {
        return this.httpClient.post<GetUsersResponse>(`${this.url}/users`, reqFollowerOf);
    }


}