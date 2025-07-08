import { HttpResponse } from "../../protocols";
import { Payment } from "../../../models/payment";

export interface GetPaymentController {
    handle(id: string): Promise<HttpResponse<Payment | string>>;
}

export interface GetPaymentRepository {
    getPayment(id:string): Promise<Payment | null>
}