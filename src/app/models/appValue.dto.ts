import { baseModel, GenericResponse } from "./base/base.dto";

export interface AppValue extends baseModel {
    label?: string;
    appTypeId?: string;
}

export interface getAppValueResponse extends GenericResponse {
    appValue?: AppValue;
}

export interface GetAppValuesResponse extends GenericResponse {
    appValues?: AppValue[];
}