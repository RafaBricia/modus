import { HttpRequest, HttpResponse , PostAdministratorController, PostAdministratorRepository, 
        PostAdmininstratorParams, EmailValidator, CPFValidator, 
        PasswordValidator , Administrator } from "../../protocols";

export class postAdministratorController implements PostAdministratorController{

    constructor( private readonly postAdministratorRepository: PostAdministratorRepository,
        private readonly emailValidator: EmailValidator,
        private readonly cpfValidator: CPFValidator,
        private readonly passwordValidator: PasswordValidator,
    ) {}

    async handle(httpResquest: HttpRequest<PostAdmininstratorParams>): Promise<HttpResponse<Administrator>>{

        try {

            const fieldRequired = ["cpf", "email", "name", "password"]

            if(!httpResquest.body || httpResquest.body === null){
                return {
                    statusCode: 400,
                    body: "No body"  
                }
            }

            for( const field of fieldRequired){
                if(!httpResquest?.body?.[field as keyof PostAdmininstratorParams]?.length){
                    return {
                        statusCode: 400,
                        body: `Missing param: ${field}`
                    }
                }

            }
            
            if(!this.cpfValidator.validate(httpResquest.body.cpf)){
                return{
                    statusCode:400,
                    body: "Invalid CPF"
                }
            }

            if(!this.emailValidator.validate(httpResquest.body.email)){
                return {
                    statusCode:400,
                    body: "Invalid Email"
                }
            }

            if(!this.passwordValidator.validate(httpResquest.body.senha)){
                return{
                    statusCode:400,
                    body: "Invalid Password"
                }
            }

            const admin = await this.postAdministratorRepository.postAdmininstrator(httpResquest.body)

            return {
                statusCode:201,
                body: admin
            }

        } catch(error){
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }

}