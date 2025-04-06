
const productContainer = document.querySelector(".product-list");
const isProductDetailsPage = document.querySelector(".product-detail")

if(productContainer){
    displayProducts();
}
else if(isProductDetailsPage){
    displayProductDetail();
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

const displayProductDetail = () => {
    const productData = JSON.parse(sessionStorage.getItem("selectedProduct"));

    const titleE1 = document.querySelector(".title");
    const priceE1 = document.querySelector(".price");
    const descriptionE1 = document.querySelector(".description");
    const mainImageContainer = document.querySelector(".main-img");
    const thumbnailContainer = document.querySelector(".thubnail-list");
    const colorContainer = document.querySelector(".color-options");
    const sizeContainer = document.querySelector(".size-options");
    const addToCarBtn = document.querySelector("#add-cart-btn");
}