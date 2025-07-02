import { Client } from '../../../models/client';
import { HttpResponse } from '../../protocols';

export interface GetClientController {
    handle(id: string): Promise<HttpResponse< Client | string>>;
}

export interface GetClientRepository {
  getClient(id: string): Promise<Client| null>;
}