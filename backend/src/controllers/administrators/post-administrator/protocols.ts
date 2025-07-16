import { HttpRequest, HttpResponse, Administrator } from "../../protocols"


export interface PostAdmininstratorParams {
    email: string;
    senha: string;
    nome: string;
    cpf: string;
}

export interface PostAdministratorRepository {
    postAdmininstrator(params: PostAdmininstratorParams):Promise<Administrator>
}

export interface PostAdministratorController {
    handle(httpResquest: HttpRequest<PostAdmininstratorParams>): Promise<HttpResponse<Administrator>>
}
