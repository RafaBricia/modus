import { HttpRequest, HttpResponse, Administrator } from "../../protocols"


export interface CreateAdmininstratorParams {
    email: string;
    senha: string;
    nome: string;
    cpf: string;
}

export interface PostAdministratorRepository {
    postAdmininstrator(params: CreateAdmininstratorParams):Promise<Administrator>
}

export interface PostAdministratorController {
    handle(httpResquest: HttpRequest<CreateAdmininstratorParams>): Promise<HttpResponse<Administrator>>
}
