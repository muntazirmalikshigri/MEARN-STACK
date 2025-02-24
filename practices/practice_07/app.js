const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
  ];
  
  const availableProducts = products.filter(
    (product) => product.inStock && product.price < 500
  );
  
  console.log(availableProducts);
 