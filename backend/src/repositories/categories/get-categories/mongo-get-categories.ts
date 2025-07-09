import { GetCategoriesRepository } from "../../../controllers/categories/get-categories/protocols";
import { MongoClient } from "../../../database/mongo";
import { Category } from "../../../models/category";

export class MongoGetCategoriesRepository implements GetCategoriesRepository {

    async getCategories(): Promise<Category[ ]| null> {

        const categories = await MongoClient.db.collection<Omit<Category, "id">>("Categorias")
        .find({})
        .toArray();

        return categories.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}))
    }
}