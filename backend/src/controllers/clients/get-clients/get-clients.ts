import { GetClientsController, GetClientsRepository } from "./protocols";

export class getClientsController implements GetClientsController{

    constructor(private readonly getclientsRepository: GetClientsRepository) {}

    async handle() {

        try{

            const clients = await this.getclientsRepository.getClients();
            
            if (!clients || clients.length === 0) {
                return {
                    statusCode: 404,
                    body: "No clients found"
                };
            }
            
            else {
                return{
                    statusCode: 200,
                    body: clients
                }
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }
}