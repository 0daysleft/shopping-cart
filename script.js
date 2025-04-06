
const productContainer = document.querySelector(".product-list");

if(productContainer){
    displayProducts();
}

function displayProducts(){
    products.forEach(product => {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =

                    `
                        <div class="img-box">
                                <img src="${product.colors[0].mainImage}">
                        </div>
                        
                        <h2 class="title"> ${product.title}</h2>
                        <span class="price">${product.price}</span>

                    `;

        productContainer.appendChild(productCard);

        const imgBox = productCard.querySelector(".img-box");
        imgBox.addEventListener(
            'click',
            () => {
                sessionStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "product-detail.html"
            }
        )
        
    });
}