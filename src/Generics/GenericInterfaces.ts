interface Result<T> {
    data:T|null,
    error: string|null
}

function fetch<T>(url:string):Result<T> {
    url;
    return {data:null,error:null}
}

interface User {
    username:string;
}

interface Product {
    title:string;
}

const firstResult = fetch<Product>("https://mywebsite.com")
firstResult.data?.title;

const secondResult = fetch<Product>('url');
secondResult.data?.title;

