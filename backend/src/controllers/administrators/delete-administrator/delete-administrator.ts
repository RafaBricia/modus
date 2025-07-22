import { DeleteAdministratorController, DeleteAdministratorParams, DeleteAdministratorRepository, Administrator, HttpRequest, HttpResponse } from "../../protocols";

export class deleteAdministratorController implements DeleteAdministratorController{
    constructor(private readonly deleteAdministratorRepository: DeleteAdministratorRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Administrator>>{

        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body:"Missing Administrator ID"
                }
            }

            const admin = await this.deleteAdministratorRepository.deleteAdministrator(id)

            return{
                statusCode:200,
                body: admin
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }
}