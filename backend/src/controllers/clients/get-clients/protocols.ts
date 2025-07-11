import { HttpResponse, Client } from "../../protocols";

export interface GetClientsController {
  handle(): Promise<HttpResponse<Client[]>>;
}

export interface GetClientsRepository {
  getClients(): Promise<Client[]>;
}
