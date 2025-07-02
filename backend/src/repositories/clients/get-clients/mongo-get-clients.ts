import { MongoClient } from "../../../database/mongo";
import { Client } from "../../../models/client";
import { GetClientsRepository } from "../../../controllers/clients/get-clients/protocols";

export class MongoGetClientsRepository implements GetClientsRepository {
  async getClients(): Promise<Client[]> {
    const clients = await MongoClient.db
      .collection<Omit<Client, "id">>("clientes")
      .find({})
      .toArray();
    return clients.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
