import { PatchPaymentRepository, MongoClient, Payment, PatchPaymentParams, ObjectId } from '../../../controllers/protocols'

export class MongoPatchPaymentRepository implements PatchPaymentRepository{

    async patchPayment(id: string, params:PatchPaymentParams): Promise<Payment>{

        await MongoClient.db.collection("Payment")
        .updateOne(
            {_id: new ObjectId(id)},{
                $set:{...params}
            })

        const payment = await MongoClient.db
        .collection<Omit<Payment, "id">>("Payment")
        .findOne({_id:new ObjectId(id)})


        if(!payment){
            throw new Error("Error not Product")
        }

        const {_id, ...rest} = payment

        return {id:payment?._id.toHexString(), ...rest}

    }

}
