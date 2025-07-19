import { PatchAdministratorController, PatchAdministratorRepository, PatchAdministratorParams, HttpRequest, HttpResponse, Administrator, EmailValidator, PasswordValidator, CPFValidator } from "../../protocols";

export class patchAdministratorController implements PatchAdministratorController{

    constructor(private readonly patchAdministratorRepository: PatchAdministratorRepository,
        private readonly emailValidator : EmailValidator,
        private readonly cpfValidator : CPFValidator,
        private readonly passwordValidator : PasswordValidator
    ){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Administrator>>{

        
        try{
            const id = httpRequest?.params?.id
            const body = httpRequest?.body


            if(!id){
                return {
                    statusCode:400,
                    body: "Missing Administrator Id"
                }
            }

            const allowedFieldToUpdate:(keyof PatchAdministratorParams)[] = [
                "cpf",
                "email",
                "senha",
                "nome"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchAdministratorParams))

            if(someFieldNotAllowedToUpdate){
                return{
                    statusCode:400,
                    body: "Some  received field is not allowed"
                }
            }

            if(!this.passwordValidator.validate(httpRequest.body.password)){
                return{
                    statusCode:400,
                    body: "Invalid Password"
                }
            }

            if(!this.emailValidator.validate(httpRequest.body.email)){
                return{
                    statusCode:400,
                    body: "Invalid Email"
                }
            }

            if(!this.cpfValidator.validate(httpRequest.body.cpf)){
                return{
                    statusCode:400,
                    body: "Invalid CPF"
                }
            }

            const admin = await this.patchAdministratorRepository.patchAdministrator(id, body)

            return {
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