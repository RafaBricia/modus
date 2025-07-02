import { GetAdministratorsController, GetAdministratorsRepository } from "./protocols";

export class getAdministratorsController implements GetAdministratorsController{

    constructor(private readonly getAdministratorsRepository: GetAdministratorsRepository) {}

    async handle() {

        const administrators = await this.getAdministratorsRepository.getAdministrators();

        try{

            if(!administrators){
                return {
                    statusCode: 404,
                    body: "No administrators found"
                }
            }
            else {
                return {
                    statusCode: 200,
                    body: administrators
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
