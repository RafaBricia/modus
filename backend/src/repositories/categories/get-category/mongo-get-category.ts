import { GetCategoryRespository, MongoClient,Category, ObjectId } from "../../../controllers/protocols";

export class MongoGetCategoryRepository implements GetCategoryRespository {

    async getCategory(id:string): Promise<Category | null> {

        const category = await MongoClient.db.collection<Omit<Category, "id">>("Categoria")
        .findOne({_id: new ObjectId(id)})

        return category ? {id: category._id.toHexString(), ...category} : null;
    }
}