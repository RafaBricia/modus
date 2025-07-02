import { Administrator } from '../../../models/administrator';
import { HttpResponse } from '../../protocols';

export interface GetAdministratorController {
    handle(id: string): Promise<HttpResponse< Administrator | string>>;
}

export interface GetAdministratorRepository {
  getAdministrator(id: string): Promise<Administrator| null>;
}