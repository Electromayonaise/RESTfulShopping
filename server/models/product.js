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

module.exports = Product;
