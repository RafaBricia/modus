export * from './administrators/get-administrator/protocols';
export * from './administrators/get-administrators/protocols';
export * from './administrators/post-administrator/protocols';

export * from './clients/get-client /protocols';
export * from './clients/get-clients/protocols';
export * from './clients/create-client/protocols';

export * from './carts/get-cart/protocols';
export * from './carts/get-carts/protocols';

export * from './categories/get-categories/protocols';
export * from './categories/get-category/protocols';

export * from './orders/get-order/protocols';
export * from './orders/get-orders/protocols';

export * from './payments/get-payment/protocols';
export * from './payments/get-payments/protocols';

export * from './products/get-product/protocols';
export * from './products/get-products/protocols';

export * from '../utils/validators-cpf'
export * from '../utils/validators-email'
export * from '../utils/validators-password'

export * from '../models/administrator'
export * from '../models/client'
export * from '../models/payment'
export * from '../models/product'
export * from '../models/cart'
export * from '../models/category'
export * from '../models/order'

export * from '../database/mongo'
export { ObjectId } from "mongodb";


export interface HttpResponse<T>{
    statusCode: number;
    body: T | string;
}

export interface HttpRequest<T = any> {
    body?: T;
    params?: any;
    query?: any;
    headers?: any;
}