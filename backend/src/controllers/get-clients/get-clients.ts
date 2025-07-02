import { GetClientsController, GetClientsRepository } from "./protocols";

export class getClientsController implements GetClientsController{

    constructor(private readonly getclientsRepository: GetClientsRepository) {}

    async handle() {

        try{

            const clients = await this.getclientsRepository.getClients();
            
            return{
                statusCode: 200,
                body: clients
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }
}