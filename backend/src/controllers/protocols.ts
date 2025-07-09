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