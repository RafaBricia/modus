import { GetProductRepository } from "../../../controllers/products/get-product/protocols";
import { MongoClient } from "../../../database/mongo";
import { Product } from "../../../models/product";
import { ObjectId } from "mongodb";

export class MongoGetProductRepository implements GetProductRepository{

    async getProduct(id: string): Promise<Product | null> {
        
        const product = await MongoClient.db.collection<Omit<Product, "id">>("Produto")
        .findOne({_id: new ObjectId(id) });

        return product ? {id: product._id.toHexString(), ...product} : null;
    }
}
