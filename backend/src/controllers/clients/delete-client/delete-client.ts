import { DeleteClientController, DeleteClientParams, DeleteClientRepository, Client, HttpRequest, HttpResponse } from "../../protocols";

export class deleteClientController implements DeleteClientController{

    constructor(private readonly deleteClientRepository: DeleteClientRepository){}

    async handle(httpRequest: HttpRequest<DeleteClientParams>): Promise<HttpResponse<Client>> {
        
        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Client ID"
                }
            }

            const client = await this.deleteClientRepository.deleteClient(id)

            return{
                statusCode:200,
                body: client
            }

        } catch(error){
            return{
                statusCode:500,
                body:"Internal Server Error"
            }
        }

    }

}