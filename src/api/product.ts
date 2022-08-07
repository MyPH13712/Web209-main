import { ProductType } from "../types/product";
import instance from "./instance";

export const remove = (id:number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const list = () => {
    const url = '/products';
    return instance.get(url);
}

export const add = (data: any) => {
    const url = "/products";
    return instance.post(url, data);
}
export const update = (product: any) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}
export const read = (id:number ) => {
    const url = `/products/${id}`;
    return instance.get(url);
}