import { Component, ViewEncapsulation } from "@angular/core";
import { UserDto } from "../../models/user/user.dto";
import { FollowerService } from "../../services/follower/follower.service";
import { SessionStorageService } from "../../services/session/session.service";
import { userService } from "../../services/user/user.service";

@Component({
    selector: 'app-userList',
    templateUrl: 'userList.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class UserListComponent {
    users: UserDto[];
    userConnected: UserDto;
    constructor(
        private userService: userService,
        private followerService: FollowerService,
    ) {
        this.userConnected = SessionStorageService.getObjectFromSessionStorage('connectedUser').user;
        this.loadUser();
    }

    async loadUser() {
        const usersResponse = await this.userService.getUsers().toPromise();
        if (usersResponse.success) {
            this.users = usersResponse.users.filter(user => user.id !== this.userConnected.id);
        }
    }

    async addFollower(user: UserDto) {
        const response = await this.followerService.addFollower({ idFollowed: this.userConnected.id, idFollower: user.id });
        if (response)
            console.log('User add success');
    }

    async alreadyFollowed() {
        const followersResponse = await this.followerService.getFollowers().toPromise();
        if (followersResponse.followers) {

        }
    }
}