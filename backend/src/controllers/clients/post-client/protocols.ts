import { HttpResponse, HttpRequest, Client } from "../../protocols";

export interface PostClientParams {
    email: string;
    senha: string;
    nome: string;
    cpf: string;
}

export interface PostClientRepository {
    postClient(params: PostClientParams): Promise<Client>
}

export interface PostClientController {
    handle(httpResquest: HttpRequest<PostClientParams>): Promise<HttpResponse<Client>>
}
