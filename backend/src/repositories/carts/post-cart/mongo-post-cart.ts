import { Cart, PostCartRepository, PostCartParams, MongoClient } from "../../../controllers/protocols";

export class MongoPostCartRepository implements PostCartRepository{

    async PostCart(params: PostCartParams): Promise<Cart> {
        
        const insertID = await MongoClient.db
        .collection("Cart")
        .insertOne({params})

        const cart = await MongoClient.db
        .collection<Omit<Cart, "id">>("Cart")
        .findOne({_id: insertID})

        if(!cart){
            throw new Error("Cart not inserted")
        }

        const {_id, ...rest} = cart
        return {id:cart._id.toHexString(), ...rest} as Cart
    }
    
}