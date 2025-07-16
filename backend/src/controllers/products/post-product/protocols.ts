import { HttpRequest, HttpResponse, Product, Types} from "../../protocols";

export interface PostProductParams{
    
    id: string; 
    categoria: Types.ObjectId;
    nome: string;
    tamanho: "P" | "M" | "G" | "GG" | "XG";
    valor: number;
    descricao: string;
    quantidade: number;
    image: string;
}

export interface PostProductController{
    handle(httpRequest: HttpRequest<PostProductParams>): Promise<HttpResponse<Product>>
}

export interface PostProductRepository{
    postProduct(params:PostProductParams): Promise<Product>
}