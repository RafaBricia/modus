import { HttpRequest, Administrator, HttpResponse } from "../../protocols";

export interface PatchAdministratorParams {
    email?: string;
    senha?: string;
    nome?: string;
    cpf?: string;
}

export interface PatchAdministratorController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Administrator>>
}

export interface PatchAdministratorRepository {
    patchAdministrator(id: string, params: PatchAdministratorParams): Promise<Administrator>
}