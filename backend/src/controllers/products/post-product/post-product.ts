import { HttpRequest, HttpResponse, PostProductController, PostProductParams, PostProductRepository, Product } from "../../protocols"; 

export class postProductController implements PostProductController{

    constructor(private readonly postProductRepository: PostProductRepository){}

    async handle(httpRequest: HttpRequest<PostProductParams>): Promise<HttpResponse<Product>>{

        try{

            if(!httpRequest.body || httpRequest.body === null){
                return{
                    statusCode:400,
                    body: "No body"
                }
            }

            if(!httpRequest.body.categoria){
                return{
                    statusCode:400,
                    body: "Missing params categoria"
                }
            }

            if(!httpRequest.body.descricao){
                return{
                    statusCode:400,
                    body: "Missing params Descricao"
                }
            }


            if(!httpRequest.body.nome){
                return{
                    statusCode:400,
                    body: "Missing params: Nome"
                }
            }


            if(!httpRequest.body.quantidade){
                return{
                    statusCode:400,
                    body: "Missing params Quantidade"
                }
            }

            if(!httpRequest.body.valor){
                return{
                    statusCode:400,
                    body: "Missing params: Valor"
                }
            }


            if(!httpRequest.body.tamanho){
                return{
                    statusCode:400,
                    body: "Missing params Tamanho"
                }
            }

            const product = await this.postProductRepository.postProduct(httpRequest.body)

            return{
                statusCode:201,
                body: product
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }
}