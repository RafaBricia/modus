import { HttpRequest, HttpResponse, PostOrderController, PostOrderParams, PostOrderRepository, Order } from "../../protocols";

export class postOrderController implements PostOrderController{

    constructor(private readonly postOrderRepository: PostOrderRepository){}

    async handle(httpRequest: HttpRequest<PostOrderParams>): Promise<HttpResponse<Order>>{

        try{

            if(!httpRequest.body || httpRequest.body === null){
                return{
                    statusCode:400,
                    body: "No body"
                }
            } 

            if(!httpRequest.body.cliente){
                return{
                    statusCode:400,
                    body: "Missing params: Cliente"
                }
            }

            if(!httpRequest.body.dataPedido){
                return{
                    statusCode:400,
                    body: "Missing params: DataPedido"
                }
            }

            if(!httpRequest.body.produtos){
                return{
                    statusCode:400,
                    body: "Missing params: Produtos"
                }
            }

            if(!httpRequest.body.valorTotal){
                return{
                    statusCode:400,
                    body: "Missing params: ValorTotal"
                }
            }

            const order = await this.postOrderRepository.postOrder(httpRequest.body)

            return{
                statusCode:201,
                body: order
            }
            
        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }

}