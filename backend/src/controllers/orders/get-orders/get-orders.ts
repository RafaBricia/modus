import { GetOrdersRespository, GetOrdersController } from "../../protocols";

export class getOrdersController implements GetOrdersController{
  
    constructor(private readonly getOrdersRepository: GetOrdersRespository){}

    async handle(){

        try{
            const orders = await this.getOrdersRepository.getOrders();

            if (!orders){
                return {
                    statusCode: 404,
                    body: "No orders found"
                };
            } else {
                return {
                    statusCode: 200,
                    body: orders
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
