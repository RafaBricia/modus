import { GetCartRespository, MongoClient, Cart, ObjectId} from "../../../controllers/protocols";

export class MongoGetCartRepository implements GetCartRespository{

async getCart(id:string): Promise<Cart | null>{

    const cart = await MongoClient.db.collection<Omit<Cart, "id">>("Carrinho")
    .findOne({_id: new ObjectId(id) });

    return cart ? {id: cart._id.toHexString(), ...cart}: null
    
}

}

  