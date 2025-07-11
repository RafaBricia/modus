import { GetProductRepository, Product, MongoClient, ObjectId } from "../../../controllers/protocols";

export class MongoGetProductRepository implements GetProductRepository{

    async getProduct(id: string): Promise<Product | null> {
        
        const product = await MongoClient.db.collection<Omit<Product, "id">>("Produto")
        .findOne({_id: new ObjectId(id) });

        return product ? {id: product._id.toHexString(), ...product} : null;
    }
}
