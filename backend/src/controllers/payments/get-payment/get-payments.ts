import { Payment } from "../../../models/payment";
import { HttpResponse } from "../../protocols";
import { GetPaymentController, GetPaymentRepository } from "./protocols";

export class getPaymentController implements GetPaymentController{

    constructor(private readonly getPaymentRepository: GetPaymentRepository){}

    async handle(id:string): Promise<HttpResponse<Payment | string>>{
        const payment = await this.getPaymentRepository.getPayment(id)

        try{

            if(!payment){
                return{
                    statusCode: 404,
                    body: "Payment not found"
                }
            }
            else{
                return {
                    statusCode: 200,
                    body: payment
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