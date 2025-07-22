import { DeleteProductController, DeleteProductParams, DeleteProductRepository, HttpRequest, HttpResponse, Product } from "../../protocols";

export class deleteProductController implements DeleteProductController{

    constructor(private readonly deleteProductRepository: DeleteProductRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>> {
        
        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing product ID"
                }
            }

            const product = await this.deleteProductRepository.deleteProduct(id)

            return{
                statusCode:200,
                body: product
            }

        } catch(error){
            return{
                statusCode:500,
                body:"Internal Server Error"
            }
        }

    }
}
