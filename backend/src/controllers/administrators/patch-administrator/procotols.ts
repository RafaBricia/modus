import { HttpRequest, Administrator } from "../../protocols";

export interface PatchAdministratorParams {
    email?: string;
    senha?: string;
    nome?: string;
    cpf?: string;
}

export interface PatchAdministratorController {
    
}

export interface PatchAdministratorRepository {
    patchAdministrator(id: string, params: PatchAdministratorParams): Promise<Administrator>
}