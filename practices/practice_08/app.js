
const products = [
    { id: 1, name: "Laptop", priceUSD: 1000 },
    { id: 2, name: "Phone", priceUSD: 500 },
    { id: 3, name: "Tablet", priceUSD: 300 }
];


const productsInPKR = products.map(product => ({
    ...product,
    pricePKR: product.priceUSD * 280
}));

console.log("Products in PKR:", productsInPKR);

const discountedProducts = productsInPKR.map(product => ({
    ...product,
    discountedPricePKR: product.pricePKR * 0.9 // 10% discount
}));

console.log("Discounted Products:", discountedProducts);
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);
