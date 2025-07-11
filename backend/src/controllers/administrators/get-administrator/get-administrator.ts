import { GetAdministratorController, GetAdministratorRepository , HttpResponse, Administrator} from "../../protocols"; 

export class getAdministratorController implements GetAdministratorController{

    constructor(private readonly getAdministratorRepository: GetAdministratorRepository){}

    async handle(id: string): Promise<HttpResponse<Administrator | string>> {

        try{

            const administrator = await this.getAdministratorRepository.getAdministrator(id);

            if(!administrator){
                return {
                    statusCode: 404,
                    body: "Administrator not found"
                };

            } 
            else {
                return {
                    statusCode: 200,
                    body: administrator
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