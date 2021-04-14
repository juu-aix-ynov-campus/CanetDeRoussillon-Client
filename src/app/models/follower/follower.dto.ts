import { GenericResponse } from "../base/base.dto";

export interface FollowerDto {
    id?: string;
    idFollowed?: string;
    idFollower?: string;
}

export interface GetFollower extends GenericResponse {
    follower?: FollowerDto;
}

export interface GetFollowers extends GenericResponse {
    followers?: FollowerDto[];
}