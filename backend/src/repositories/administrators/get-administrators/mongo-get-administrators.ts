import { GetAdministratorsRepository, MongoClient, Administrator } from "../../../controllers/protocols";

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
