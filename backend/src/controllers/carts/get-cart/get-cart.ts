import { HttpResponse, GetCartController, GetCartRespository, Cart } from "../../protocols";

export class getCartController implements GetCartController{

    constructor(private readonly getCartRepository: GetCartRespository) {}
    
    async handle(id: string): Promise<HttpResponse<Cart | string>>{        
        
        const cart  = await this.getCartRepository.getCart(id)

        try {

            if(!cart){
                return {
                    statusCode: 404,
                    body: "Cart not found"
                };
            } 

            else {
                return {
                    statusCode: 200,
                    body: cart
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