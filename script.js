
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

    let selectedColor = productData.colors[0]
    let selectedSize = seletedColor.sizes[0]

    function updateProductDisplay(colorData){
        if(!colorData.sizes.includes(selectedSize)){
            selectedSize = colorData.sizes[0];
        }

        mainImageContainer.innerHTML = `<img src="${colorData.mainImage}"/>`;

        thumbnailContainer.innerHTML = "";

        const allThumbnails = [colorData.mainImage].concat(colorData.thumbnails.slice(0, 3));
        allThumbnails.forEach(thumb => {
            const img = document.createElement("img");
            img.src = thumb;

            thumbnailContainer.appendChild(img);

            img.addEventListener('click', () => {
                mainImageContainer.innerHTML = `<img src="${thumb}/>`;
            })
        })

        colorContainer.innerHTML = '';
        productData.colors.forEach(
            color => {
                const img = document.createElement('img');
                img.src = color.mainImage;

                if(color.name === colorData.name) img.classList.add('selected');

                colorContainer.appendChild(img);

                img.addEventListener(
                    'click', () => {
                        seletedColor = color;
                        updateProductDisplay(color);
                    }
                )
            }
        )

        sizeContainer.innerHTML = ''
        colorData.sizes.forEach(
            size => {
                const btn = document.createElement("button");
                btn.textContent = size;
                if (size === selectedSize) btn.classList.add("selected");

                sizeContainer.appendChild(btn);

                btn.addEventListener('click', () => {
                    document.querySelectorAll(".size-options button").forEach (
                        el => el.classList.remove("selected"))
                        btn.classList.add("selected");
                        selectedSize = size
                })
            }
        )
    }


    titleE1.textContent = productData.title;
    priceE1.textContent = productData.price;
    descriptionE1.textContent = productData.description;

    updateProductDisplay(selectedColor);

    addToCarBtn.addEventListener('click', () => {
        addToCarBtn(productData, selectedColor, selectedSize);
    })
}