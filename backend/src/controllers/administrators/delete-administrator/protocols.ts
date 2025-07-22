import { HttpRequest, HttpResponse, Administrator } from "../../protocols";

export interface DeleteAdministratorRepository{
    deleteAdministrator(id:string):Promise<Administrator>
}

export interface DeleteAdministratorController{
    handle(httpRequest: HttpRequest<DeleteAdministratorParams>): Promise<HttpResponse<Administrator>>
}

export interface DeleteAdministratorParams{
    id:string
}