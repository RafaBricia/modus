import { GetClientController, GetClientRepository } from "./protocols";
import { Client } from '../../../models/client';
import { HttpResponse } from '../../protocols';

export class getClientController implements GetClientController {

    constructor(private readonly getClientResponsitory: GetClientRepository) {}

    async handle(id: string): Promise<HttpResponse<Client | string>> {

        try{

            const client = await this.getClientResponsitory.getClient(id);
            if (!client){
                return {
                    statusCode: 404,
                    body: "Client not found"
                };
            }

            else {
                return {
                    statusCode: 200,
                    body: client
                };
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }
}