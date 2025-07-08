import { HttpResponse } from "../../protocols";
import { Payment } from "../../../models/payment";

export interface GetPaymentsController {
handle(): Promise<HttpResponse<Payment[] | string>>
}

export interface GetPaymentsRepository {
    getPayments(): Promise<Payment[] | null>
}