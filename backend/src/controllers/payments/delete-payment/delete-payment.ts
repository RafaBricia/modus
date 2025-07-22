import { DeletePaymentController, DeletePaymentRepository, HttpRequest, HttpResponse, Payment } from "../../protocols";

export class deletePaymentController implements DeletePaymentController{

    constructor(private readonly deletePaymentRepository: DeletePaymentRepository){}
    
        async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Payment>> {
            
            try{
    
                const id = httpRequest?.params?.id
    
                if(!id){
                    return{
                        statusCode:400,
                        body: "Missing payment ID"
                    }
                }
    
                const payment = await this.deletePaymentRepository.deletePayment(id)
    
                return{
                    statusCode:200,
                    body: payment
                }
    
            } catch(error){
                return{
                    statusCode:500,
                    body:"Internal Server Error"
                }
            }
    
        }

}