export interface baseModel {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface GenericResponse {
    success?: boolean;
    error?: string;
    message?: string;
}