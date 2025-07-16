import { HttpRequest, HttpResponse, PostPaymentsController, PostPaymentsParams, PostPaymentsRepository, Payment } from "../../protocols";

export class postPaymentsController implements PostPaymentsController{

    constructor(private readonly postPaymentsRepository: PostPaymentsRepository){}

    async handle(httpRequest: HttpRequest<PostPaymentsParams>): Promise<HttpResponse<Payment>>{

        try{

            if(!httpRequest.body || httpRequest.body === null){
                return{
                    statusCode:400,
                    body: "No body"
                }
            }

            if(!httpRequest.body.carrinho){
                return{
                    statusCode: 400,
                    body: "Missing params: Carrinho"
                }
            }

            if(!httpRequest.body.metodo){
                return{
                    statusCode: 400,
                    body: "Missing params: Metodo"
                }
            }

            if(!httpRequest.body.status){
                return{
                    statusCode: 400,
                    body: "Missing params: Status"
                }
            }

            if(!httpRequest.body.valor){
                return{
                    statusCode: 400,
                    body: "Missing params: Valor"
                }
            }

            const payment = await this.postPaymentsRepository.postPayments(httpRequest.body)

            return{
                statusCode:201,
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