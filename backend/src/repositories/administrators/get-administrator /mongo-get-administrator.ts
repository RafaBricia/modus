import { GetAdministratorRepository } from "../../../controllers/administrators/get-administrator/protocols";
import { MongoClient } from "../../../database/mongo";
import { Administrator } from "../../../models/administrator";
import { ObjectId } from "mongodb";

export class MongoGetAdministratorRepository implements GetAdministratorRepository {

    async getAdministrator(id: string): Promise<Administrator | null> {
        
        const administrator =  await MongoClient.db.collection<Omit<Administrator, "id">>("Administrador")
        .findOne({_id: new ObjectId(id) });

        return administrator ? {id: administrator._id.toHexString(), ...administrator} : null;
    }
}
