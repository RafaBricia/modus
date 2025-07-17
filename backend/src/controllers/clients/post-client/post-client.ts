import { HttpRequest,HttpResponse, PostClientParams, PostClientRepository, 
        PostClientController, Client, PasswordValidator, 
        CPFValidator, EmailValidator  } from "../../protocols";

export class postClientController implements PostClientController{

    constructor(private readonly postClientRepository: PostClientRepository,
        private readonly PasswordValidator: PasswordValidator,
        private readonly EmailValidator: EmailValidator,
        private readonly CPFValidator: CPFValidator
    ) {}
    

    async handle(httpResquest: HttpRequest<PostClientParams>): Promise<HttpResponse<Client>> {

        try{

            const fieldRequired = ["cpf", "email", "name", "password"]
           
            if(!httpResquest.body || httpResquest.body === null){
                return {
                    statusCode: 400,
                    body: "No body"  
                }
            }

            for( const field of fieldRequired){
                if(!httpResquest?.body?.[field as keyof PostClientParams]?.length){
                    return {
                        statusCode: 400,
                        body: `Missing param: ${field}`
                    }
                }

            }
            
            if (!this.PasswordValidator.validate(httpResquest.body.senha)) {
                return {
                    statusCode: 400,
                    body: "Invalid password"
                };
                
            }

            if (!this.EmailValidator.validate(httpResquest.body.email)){
                return{
                    statusCode: 400,
                    body: "Invalid email"
                }
            }

            if (!this.CPFValidator.validate(httpResquest.body.cpf)){
                return{
                    statusCode: 400,
                    body: "Invalid CPF"
                }
            }

            const client = await this.postClientRepository.postClient(httpResquest.body)

            return {
                statusCode: 201,
                body: client
            };

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }
}