import { GetCategoriesRepository, MongoClient,Category } from "../../../controllers/protocols";


export class MongoGetCategoriesRepository implements GetCategoriesRepository {

    async getCategories(): Promise<Category[ ]| null> {

        const categories = await MongoClient.db.collection<Omit<Category, "id">>("Categorias")
        .find({})
        .toArray();

        return categories.map(({_id, ...rest}) => ({...rest, id: _id.toHexString()}))
    }
}