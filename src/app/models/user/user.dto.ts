import { baseModel, GenericResponse } from "../base/base.dto";

export interface UserDto extends baseModel {
    email?: string,
    login?: string,
    role?: string,
}

export interface Credentials {
    login?: string,
    password?: string,
}

export interface GetUserResponse extends GenericResponse {
    user: UserDto,
    token?: string,
}

export interface GetUsersResponse extends GenericResponse {
    users: UserDto[];
}

export interface ConnectedUser extends UserDto {
    token?: string;
}