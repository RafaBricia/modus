import { HttpResponse, Payment } from "../../protocols";

export interface GetPaymentsController {
handle(): Promise<HttpResponse<Payment[] | string>>
}

export interface GetPaymentsRepository {
    getPayments(): Promise<Payment[] | null>
}