import { PatchOrderParams, PatchOrderRepository, ObjectId, Order, MongoClient } from "../../../controllers/protocols";

export class MongoPatchOrderRepository implements PatchOrderRepository{

    async patchOrder(id:string, params: PatchOrderParams): Promise<Order>{

        await MongoClient.db.collection("Order")
        .updateOne({id:new ObjectId(id)}, {
            $set:{
                ...params
            }
        })

        const order = await MongoClient.db
        .collection<Omit<Order, "id">>("Order")
        .findOne({_id: new ObjectId(id)})

        if(!order){
            throw new Error("Error not Order")
        }

        const {_id, ...rest} = order

        return {id: order._id.toHexString(), ...rest}
    }

}
