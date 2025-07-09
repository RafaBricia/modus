import { GetPaymentsRepository } from "../../../controllers/payments/get-payments/protocols";
import { MongoClient } from "../../../database/mongo";
import { Payment } from "../../../models/payment";

export class MongoGetPaymentsRepository implements GetPaymentsRepository {

    async getPayments(): Promise<Payment[] >{

        const payments = await MongoClient.db.collection<Omit<Payment, "id">>("Pagamentos")
            .find({})
            .toArray();

            return payments.map(({ _id, ...rest}) => ({ ...rest, id: _id.toHexString()}))
    }

}