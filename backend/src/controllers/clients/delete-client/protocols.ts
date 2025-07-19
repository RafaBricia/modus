import { HttpRequest, HttpResponse, Client } from "../../protocols";

export interface DeleteClientRepository{
    deleteClient(params:DeleteClientParams):Promise<Client>
}

export interface DeleteClientController{
    handle(httpRequest: HttpRequest<DeleteClientParams>): Promise<HttpResponse<Client>>
}

export interface DeleteClientParams{
    id:string
}