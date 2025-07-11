import { GetPaymentsRepository, MongoClient, Payment } from "../../../controllers/protocols";

export class MongoGetPaymentsRepository implements GetPaymentsRepository {

    async getPayments(): Promise<Payment[] >{

        const payments = await MongoClient.db.collection<Omit<Payment, "id">>("Pagamentos")
            .find({})
            .toArray();

            return payments.map(({ _id, ...rest}) => ({ ...rest, id: _id.toHexString()}))
    }

}