import { HttpResponse, GetProductController, GetProductRepository, Product} from "../../protocols";


export class getProductController implements GetProductController{

    constructor(private readonly getProductRepository: GetProductRepository){}

    async handle(id:string): Promise<HttpResponse<Product | string>>{
        const product = await this.getProductRepository.getProduct(id);
        try{

            if(!product){
                return {
                    statusCode: 404,
                    body: "Products not found"
                };
            } else {
                return {
                    statusCode: 200,
                    body: product
                };
            }

        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal Server Error"
            };
        }
    }
}