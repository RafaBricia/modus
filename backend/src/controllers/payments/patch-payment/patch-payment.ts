import { realpathSync } from "fs";
import { PatchPaymentController, PatchPaymentRepository, PatchPaymentParams, HttpRequest, HttpResponse, Payment } from "../../protocols";


export class patchPaymentController implements PatchPaymentController{

    constructor( private readonly patchPaymentRepository: PatchPaymentRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Payment>> {
        try{

            const id = httpRequest.params?.id
            const body = httpRequest.body

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Payment ID"
                }
            }

            const allowedFieldToUpdate: (keyof PatchPaymentParams)[] = [
                "carrinho",
                "metodo",
                "status",
                "valor"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchPaymentParams))

            if(someFieldNotAllowedToUpdate){
                return{
                    statusCode:400,
                    body: "Some received field is not allowed"
                }
            }

            const payment = await this.patchPaymentRepository.patchPayment(id,body)

            return{
                statusCode:200,
                body: payment
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }
}