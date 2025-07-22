import { DeleteCartParams, DeleteCartRepository, Cart, MongoClient, ObjectId } from "../../../controllers/protocols";

export class MongoDeleteCartRepository implements DeleteCartRepository{
    async deleteCart(id:string): Promise<Cart> {
        
        const cart = await MongoClient.db.collection<Omit<Cart, "id">>("Cart")
        .findOne({_id: new ObjectId(id)})

        if(!cart){
            throw new Error("Cart not found")
        }

        const {deletedCount} = await MongoClient.db.collection("Cart").deleteOne({_id:new ObjectId(id)})

        if( deletedCount === 0 ){
            throw new Error("Cart not deleted")
        }

        const {_id, ...rest} = cart

        return {id: _id.toHexString(), ...rest}

    }
}