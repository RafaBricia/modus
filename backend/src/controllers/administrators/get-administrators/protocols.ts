import { Administrator, HttpResponse } from '../../protocols';

export interface GetAdministratorsController{
    handle(): Promise<HttpResponse<Administrator[]>>
}

export interface GetAdministratorsRepository {
    getAdministrators(): Promise<Administrator[]>
}