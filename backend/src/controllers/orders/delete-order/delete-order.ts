import { DeleteOrderController, DeleteOrderRepository, HttpRequest, HttpResponse, Order } from "../../protocols";

export class deleteOrderController implements DeleteOrderController{

    constructor(private readonly deleteOrderRepository: DeleteOrderRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Order>> {
        
        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Order ID"
                }
            }

            const order = await this.deleteOrderRepository.deleteOrder(id)

            return{
                statusCode:200,
                body:order
            }

        }catch(error){
            return{
                statusCode:500,
                body:"Internal Server Error"
            }
        }

    }

}