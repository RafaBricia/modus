import { HttpRequest, Client } from "../../protocols";

export interface PatchClientParams {
    email?: string;
    senha?: string;
    nome?: string;
    cpf?: string;
}

export interface PatchClientController {
    
}

export interface PatchClientRepository {
    patchClient(id: string, params:PatchClientParams): Promise<Client>
}