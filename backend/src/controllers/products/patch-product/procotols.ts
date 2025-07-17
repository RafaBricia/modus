import { HttpRequest, HttpResponse, Product, Types } from "../../protocols";

export interface PatchProductParams {
    id?: string; 
    categoria?: Types.ObjectId;
    nome?: string;
    tamanho?: "P" | "M" | "G" | "GG" | "XG";
    valor?: number;
    descricao?: string;
    quantidade?: number;
    image?: string;
}

export interface PatchProductController {
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Product>>
}

export interface PatchProductRepository {
    patchProduct(id: string, params:PatchProductParams): Promise<Product>
}