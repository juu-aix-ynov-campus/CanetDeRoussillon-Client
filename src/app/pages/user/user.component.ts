import { Component, ViewEncapsulation } from "@angular/core";
import { FollowerDto } from "../../models/follower/follower.dto";
import { UserDto } from "../../models/user/user.dto";
import { FollowerService } from "../../services/follower/follower.service";
import { userService } from "../../services/user/user.service";

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class UserComponent {
    followers: FollowerDto[];
    users: UserDto[];
    constructor(
        private usersService: userService,
        private followerService: FollowerService,
    ) {
    }

    ngOnInit() {
        this.loadUser();
    }

    async loadUser() {
        const response = await this.followerService.getFollowers().toPromise();
        if (response.success)
            this.followers = response.followers;

        let ids: string[] = [];

        if (this.followers) {
            this.followers.forEach(item => {
                ids.push(item.idFollower)
            })
        }

        const usersFromFollowersResponse = await this.followerService.getUserFromFollower({ ids: ids.join(',') }).toPromise();
        if (usersFromFollowersResponse.success)
            this.users = usersFromFollowersResponse.users;


        console.log(this.users);
    }


}