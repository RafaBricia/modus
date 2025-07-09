import { Client } from "../../../models/client";
import { HttpResponse, HttpRequest } from "../../protocols";

export interface CreateClientParams {
    email: string;
    senha: string;
    nome: string;
    cpf: string;
}

export interface PostClientRepository {
    postClient(params: CreateClientParams): Promise<Client>
}

export interface PostClientController {
    handle(httpResquest: HttpRequest<CreateClientParams>): Promise<HttpResponse<Client>>
}