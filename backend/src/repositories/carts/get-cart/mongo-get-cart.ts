import { Cart } from "../../../models/cart";
import { MongoClient } from "../../../database/mongo";
import { GetCartRespository } from "../../../controllers/carts/get-cart/protocols";
import { ObjectId } from "mongodb";

export class MongoGetCartRepository implements GetCartRespository{

async getCart(id:string): Promise<Cart | null>{

    const cart = await MongoClient.db.collection<Omit<Cart, "id">>("Carrinho")
    .findOne({_id: new ObjectId(id) });

    return cart ? {id: cart._id.toHexString(), ...cart}: null
    
}

}

  