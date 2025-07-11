import { HttpResponse, Payment } from "../../protocols";

export interface GetPaymentController {
    handle(id: string): Promise<HttpResponse<Payment | string>>;
}

export interface GetPaymentRepository {
    getPayment(id:string): Promise<Payment | null>
}