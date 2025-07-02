import { GetAdministratorsRepository } from "../../../controllers/administrators/get-administrators/protocols";
import { Administrator } from "../../../models/administrator";
import { MongoClient } from "../../../database/mongo";

export class MongoGetAdministratorsRepository implements GetAdministratorsRepository {
    async getAdministrators(): Promise<Administrator[]> {
        const administrators = await MongoClient.db
            .collection<Omit<Administrator, "id">>("administrators")
            .find({})
            .toArray();

        return administrators.map(({ _id, ...rest }) => ({
            ...rest,
            id: _id.toHexString(),
        }));
    }
}
