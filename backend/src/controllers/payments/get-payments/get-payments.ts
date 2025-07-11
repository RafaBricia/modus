import { GetPaymentsController, GetPaymentsRepository } from "../../protocols";


export class getPaymentsController implements GetPaymentsController{

    constructor(private readonly getPaymentsRepository: GetPaymentsRepository){}

    async handle() {
        const payment = await this.getPaymentsRepository.getPayments()

        try{

            if(!payment){
                return {
                    statusCode: 404,
                    body: "No payments found"
                };
            } else {
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