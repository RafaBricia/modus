import { MongoClient } from "../../database/mongo";
import { Cliente } from "../../models/cliente";
import { GetClientsRepository } from "../../controllers/get-clients/protocols";

export class MongoGetClientsRepository implements GetClientsRepository {
    async getClients(): Promise<Cliente[]> {
        const clients = await MongoClient.db.collection<Omit<Cliente, "id">>("clientes").find({}).toArray();
        return clients.map(({ _id, ...rest }) => ({...rest, id: _id.toHexString()}));
    }
}