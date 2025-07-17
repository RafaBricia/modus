import { PatchCartRepository, Cart, PatchCartParams, ObjectId, MongoClient } from '../../../controllers/protocols'

export class MongoPatchCartRepository implements PatchCartRepository{

    async patchCart(id: string, params: PatchCartParams): Promise<Cart> {
        
        await MongoClient.db.collection("Cart")
        .updateMany({id: new ObjectId(id)},{
            $set:{
                ...params
            }
        })

        const Cart = await MongoClient.db.collection<Omit<Cart, "id">>("Cart").findOne({_id: new ObjectId(id)})

        if(!Cart){
            throw new Error("Error not Cart")
        }

        const {_id, ...rest} = Cart

        return {id: Cart._id.toHexString(), ...rest}

    }


}
