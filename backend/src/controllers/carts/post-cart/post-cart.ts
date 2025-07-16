import { HttpRequest, HttpResponse, Cart, PostCartController, PostCartParams, PostCartRepository} from "../../protocols";

export class postCartController implements PostCartController{

    constructor(private readonly postCartRepository: PostCartRepository){}

    async handle(httpRequest: HttpRequest<PostCartParams>): Promise<HttpResponse<Cart>> {
        try{

            if(!httpRequest.body || httpRequest.body === null){
                return{
                    statusCode:400,
                    body: "No body"
                }
            }

            if(!httpRequest.body.produto){
                return {
                    statusCode: 400,
                    body: "Missing param: Produto" 
                }
            }

            if(!httpRequest.body.quantidade){
                return {
                    statusCode: 400,
                    body: "Missing param: Quantidade" 
                }
            }

            if(!httpRequest.body.valor){
                return {
                    statusCode: 400,
                    body: "Missing param: Valor" 
                }
            }

            const cart = await this.postCartRepository.PostCart(httpRequest.body)

            return {
                statusCode:201,
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