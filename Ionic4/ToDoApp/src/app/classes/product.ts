// here we are stating what information a product will have.
// this is also the format of the information.
export class Product
{
    public name: string = "";

    public size: string = "M";
}

// what are the products?
export var products: Product[] = [
    {
        name: "shirt",
        size: "M"
    },
    {
        name: "shirt",
        size: "M"
    }
];