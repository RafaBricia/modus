import { GetClientRepository, MongoClient, Client } from "../../../controllers/protocols";
import { ObjectId } from "mongodb";

export class MongoGetClientsRepository implements GetClientRepository {
    async getClient(id: string): Promise<Client | null> {
      const client = await MongoClient.db
        .collection<Omit<Client, "id">>("clientes")
        .findOne({ _id: new ObjectId(id) });
  
      return client ? { id: client._id.toHexString(), ...client } : null;
    }
  }
  