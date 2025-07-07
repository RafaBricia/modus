import { GetOrderController, GetOrderRepository } from "./protocols";
import { Order } from '../../../models/order';
import { HttpResponse } from "../../protocols";


export class getOrderController implements GetOrderController {

    constructor(private readonly getOrderRepository: GetOrderRepository){}

    async handle(id: string): Promise<HttpResponse<Order | string>>{

        try {

            const order = await this.getOrderRepository.getOrder(id);

            if(!order){
                return {
                    statusCode: 404,
                    body: "Order not found"
                }
            }

            else{
                return {
                    statusCode: 200,
                    body: order
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