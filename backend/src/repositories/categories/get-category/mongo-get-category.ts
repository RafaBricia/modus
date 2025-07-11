import { GetCategoryRespository, MongoClient,Category } from "../../../controllers/protocols";
import { ObjectId } from "mongodb";

export class MongoGetCategoryRepository implements GetCategoryRespository {

    async getCategory(id:string): Promise<Category | null> {

        const category = await MongoClient.db.collection<Omit<Category, "id">>("Categoria")
        .findOne({_id: new ObjectId(id)})

        return category ? {id: category._id.toHexString(), ...category} : null;
    }
}