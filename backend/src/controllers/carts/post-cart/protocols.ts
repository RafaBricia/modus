import { Cart, HttpRequest, HttpResponse, Types} from "../../protocols";

export interface PostCartParams {
    id: string
    valor: number
    quantidade: number
    produto: Types.ObjectId
}
export interface PostCartRepository {
    PostCart(params: PostCartParams): Promise<Cart>
}

export interface PostCartController {
    handle(httpRequest: HttpRequest<PostCartParams>): Promise<HttpResponse<Cart>>
}