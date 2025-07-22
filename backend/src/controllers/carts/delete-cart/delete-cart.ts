import { DeleteCartController, DeleteCartParams, DeleteCartRepository, Cart, HttpRequest, HttpResponse } from "../../protocols";

export class deleteCartController implements DeleteCartController{
    constructor(private readonly deleteCartRepository: DeleteCartRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Cart>>{

        try{

            const id = httpRequest?.params?.id

            if(!id){
                return{
                    statusCode:400,
                    body:"Missing Cart ID"
                }
            }

            const cart = await this.deleteCartRepository.deleteCart(id)

            return{
                statusCode:200,
                body: cart
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }
}