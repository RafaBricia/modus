// import { DeleteProductParams, DeleteProductRepository, MongoClient, Product } from "../../../controllers/protocols";

// export class MongoDeleteProductRepository implements DeleteProductRepository {
//   async deleteProduct(params: DeleteProductParams): Promise<Product> {
//     const id = params.id;

//     const product = await MongoClient.db
//       .collection<Omit<Product, "id">>("Product")
//       .findOne({ id });

//     if (!product) {
//       throw new Error("Product not found");
//     }

//     const { deletedCount } = await MongoClient.db
//       .collection("Product")
//       .deleteOne({ id });

//     if (deletedCount === 0) {
//       throw new Error("Error: product not deleted");
//     }

//     return {
//       id,
//       ...product,
//     };
//   }
// }
