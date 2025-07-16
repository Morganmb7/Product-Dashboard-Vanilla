//fetch products then
function fetchProductsThen(){
    fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((product) => {
            console.log(product.fields.name);
        });
})
.catch((error) => {
    console.error("Fetch error using then():", error);
});
}

//fetch Products Async
async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products= await response.json();
        displayProducts(products);
          
    } catch (error) {
        handleError(error);
}
}

//display products 
function displayProducts(products) {
    const contianer = document.getElemetById("products-container");
    contianer.innerHTML = ""; // Clear previous content
    products.slice(0,5).forEach((product) =>{
        const {name, price, image} = product.fields;

           const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(productCard);
  });
}
//Handling errors
function handleError(error) {
    console.error("An error occurred:", error.message);
}

//calling the functions
fetchProductsThen();
fetchProductsAsync();
