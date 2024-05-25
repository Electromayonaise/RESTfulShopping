class Product {
    constructor(name, description, price, quantity) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    static addProduct(product) {
        Product.products.push(product);
    }

    static getAllProducts() {
        return Product.products;
    }
}

Product.products = [];
Product.products.push(new Product("product","pro",10,10))
module.exports = Product;
