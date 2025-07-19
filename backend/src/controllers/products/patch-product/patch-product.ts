import { PatchProductController, PatchProductRepository, PatchProductParams, HttpRequest, HttpResponse, Product } from "../../protocols";

export class patchProductController implements PatchProductController{

    constructor(private readonly patchProductRepository: PatchProductRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>> {
        try{

            const id = httpRequest.params?.id
            const body = httpRequest.body

            if(!id){
                return {
                    statusCode:400,
                    body: "Missing Product ID"
                }
            }

            const allowedFieldToUpdate: (keyof PatchProductParams)[] = [
                "categoria",
                "descricao",
                "image",
                "nome",
                "quantidade",
                "tamanho",
                "valor"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchProductParams))

            if(someFieldNotAllowedToUpdate){
                return{
                    statusCode:400,
                    body: "Some received field is not allowed"
                }
            }

            const product = await this.patchProductRepository.patchProduct(id,body)

            return{
                statusCode:200,
                body:product
            }

        } catch(error){
            return{
                statusCode:500,
                body: "Internal Server Error"
            }
        }
    }

}