import { PatchClientController, PatchClientRepository, PatchClientParams, HttpRequest, HttpResponse, Client } from "../../protocols";

export class patchClientController implements PatchClientController{

    constructor(private readonly patchClientRepository: PatchClientRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Client>> {
        try{

            const id = httpRequest.params?.id
            const body = httpRequest.body

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Client ID"
                }
            }

            const allowedFieldToUpdate: (keyof PatchClientParams)[] = [
                "cpf",
                "email",
                "nome",
                "senha"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchClientParams))

            if(someFieldNotAllowedToUpdate){
                return{
                    statusCode:400,
                    body: "Some received field is not allowed "
                }
            }

            const client = await this.patchClientRepository.patchClient(id, body)
            
            return{
                statusCode:200,
                body:client
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal server error"
            }
        }
    }
}