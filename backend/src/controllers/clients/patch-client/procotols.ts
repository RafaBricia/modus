import { HttpRequest, Client, HttpResponse } from "../../protocols";

export interface PatchClientParams {
    email?: string;
    senha?: string;
    nome?: string;
    cpf?: string;
}

export interface PatchClientController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Client>>
}

export interface PatchClientRepository {
    patchClient(id: string, params:PatchClientParams): Promise<Client>
}