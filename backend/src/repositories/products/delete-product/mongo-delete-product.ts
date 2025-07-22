import { DeleteProductRepository, MongoClient, ObjectId, Product } from "../../../controllers/protocols";

export class MongoDeleteProductRepository implements DeleteProductRepository {
  async deleteProduct(id: string): Promise<Product> {

    const product = await MongoClient.db
      .collection<Omit<Product, "id">>("Product")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      throw new Error("Product not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("Product")
      .deleteOne({ _id: new ObjectId(id) });

    if (deletedCount === 0) {
      throw new Error("Error: product not deleted");
    }

    const {_id, ...rest} = product

    return {
      id: product._id.toHexString(),
      ...rest,
    };
  }
}
