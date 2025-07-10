import { HttpRequest,HttpResponse } from "../../protocols";
import { CreateClientParams, PostClientRepository, PostClientController } from "./protocols";
import { Client } from "../../../models/client";
import { PasswordValidator } from "../../../utils/validators-password";
import { CPFValidator } from "../../../utils/validators-cpf";
import { EmailValidator } from "../../../utils/validators-email";


export class postClientController implements PostClientController{

    constructor(private readonly postClientRepository: PostClientRepository,
        private readonly PasswordValidator: PasswordValidator,
        private readonly EmailValidator: EmailValidator,
        private readonly CPFValidator: CPFValidator
    ) {}
    

    async handle(httpResquest: HttpRequest<CreateClientParams>): Promise<HttpResponse<Client>> {

        try{

            if(!httpResquest.body){
                return {
                    statusCode: 400,
                    body: "Missing param: body"
                };
            } 
            
            if (!httpResquest.body.email){
                return{
                    statusCode: 400,
                    body: "Missing param: email"
                }
            }

            if (!httpResquest.body.senha){
                return{
                    statusCode: 400,
                    body: "Missing param: password"
                }
            }

            if (!httpResquest.body.nome){
                return{
                    statusCode: 400,
                    body: "Missing param: name"
                }
            }

            if (!httpResquest.body.cpf){
                return{
                    statusCode: 400,
                    body: "Missing param: CPF"
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