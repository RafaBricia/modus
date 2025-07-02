import { Client } from "../../../models/client";
import { HttpResponse } from "../../protocols";

export interface GetClientsController {
  handle(): Promise<HttpResponse<Client[]>>;
}

export interface GetClientsRepository {
  getClients(): Promise<Client[]>;
}
