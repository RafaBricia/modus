import { Cliente } from "../../models/cliente";
import { HttpResponse } from "../protocols";

export interface GetClientsController {
    handle(): Promise<HttpResponse<Cliente[]>>;
}

export interface GetClientsRepository {
    getClients(): Promise<Cliente[]>;
}