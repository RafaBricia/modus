import { PatchCartController, PatchCartRepository, PatchCartParams, HttpRequest, HttpResponse, Cart } from "../../protocols";

export class patchCartController implements PatchCartController{

    constructor(private readonly patchCartRepository: PatchCartRepository){}

    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Cart>> {

        try{

            const id = httpRequest.params?.id
            const body = httpRequest.body

            if(!id){
                return{
                    statusCode:400,
                    body: "Missing Cart ID"
                }
            }

            const allowedFieldToUpdate : (keyof PatchCartParams)[] = [
                "produto",
                "quantidade",
                "valor"
            ]

            const someFieldNotAllowedToUpdate = Object.keys(body).some((key) => !allowedFieldToUpdate.includes(key as keyof PatchCartParams) )

            if(someFieldNotAllowedToUpdate){
                return{
                    statusCode:400,
                    body: "Some received field is not allowed"
                }
            }

            const cart = await this.patchCartRepository.patchCart(id,body)

            return{
                statusCode:200,
                body: cart
            }

        } catch(error){
            return{
                statusCode: 400,
                body: "Internal server error"
            }
        }
    }

}