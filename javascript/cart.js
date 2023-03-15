// vars
shoppingCart = [];

const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cartItems");
const totalPrice = document.getElementById("total-price");
const checkoutButton = document.getElementById("btn-checkout");
const itemRow = document.getElementById("item");



// Funciones
// Sweetalert
// Sweetalert Checkout
function triggerSweetAlertCheckout(title, message, alertType) {
    Swal.fire({
        title: "Pedido procesado",
        text: "El pedido fue enviado a Cocina",
        icon: "success",
        confirmButtonText: 'OK',
    })
};

function toastifyAdd(text) {
    Toastify({
        text: "Agregado al carrito",
        duration: 3500,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #343a40, #fd7e14)",
        },
        onClick: function(){} // Callback after click
        }).showToast();
}
// Total
function totalSum(burgers) {
    let total = 0
    console.log(burgers);
    const forEachCallBack = (burger) => {
        console.log(burger);
        total = total + burger.price
    };
    burgers.forEach(forEachCallBack)
    console.log(total);
    return total
}


// Storage
function saveStorage(total) {
    sessionStorage.setItem("total", JSON.stringify(total));
}


// JSON FETCH
async function getProductsJSON() {
    return await fetch('./products.json')
        .then(products => {
            return products.json();
        })
        .then((data) => { return data; })
}


// Populate
async function populateProducts() {
    const products = await getProductsJSON()
    console.log({ products });
    const renderedProducts = products.map((product) => {
        const { id, image, description, title, price } = product;
        return `<div class="col d-flex">
        <div class="card shadow" style="width: 20rem;" alt="burguer">
            <img class="card-img-top mx-auto d-block" src="/${image}">
            <div class="card-body text-center">
                <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                    </div>
                    <button class="btn-cart" id="${id}">Agregar al pedido</button>
            </div>
        </div>
        </div>`
    })

    productContainer.innerHTML = renderedProducts.join('')

    let buttonAddToCart = document.querySelectorAll(".btn-cart");
    buttonAddToCart.forEach(button => {
        button.addEventListener("click", () => {
            const product = products.find((product) => {
                return (product.id === button.id)
            })
            shoppingCart.push(product);
            const renderedCartProducts = shoppingCart.map((product) => {
                const { id, image, description, title, price } = product;
                return `<div class="item">
                    <div class="item-name">${title}</div>
                <div class="item-price">$${price}</div>
                    <button class="remove-item" id="${id}">Remove</button>
            </div>`
            })
            cartContainer.innerHTML = renderedCartProducts.join('');
            const total = totalSum(shoppingCart);
            totalPrice.innerHTML = `<p>Total  $${total}</p>`;
            toastifyAdd();
        });
    })
}


// remove no lo puedo hacer funcionar

function removeBurger() {
    button.addEventListener
    // const indexToRemove = shoppingCart.findIndex((burger) => burger.id === id);
    // if (indexToRemove !== -1) {
    //     shoppingCart.splice(indexToRemove, 1);
    // }
    // const renderedCartProducts = shoppingCart.map((product) => {
    //     const { id, image, description, title, price } = product;
    //     return `<div class="item">
    //         <div class="item-name">${title}</div>
    //         <div class="item-price">$${price}</div>
    //         <button class="remove-item" id="${id}" onclick="removeBurger(${id})">Remove</button>
    //     </div>`
    // })
    // cartContainer.innerHTML = renderedCartProducts.join('');
    // totalPrice.innerHTML = `<span>$ ${totalSum(shoppingCart)}</span>`;
};

checkoutButton.addEventListener("click", checkout); // lo mismo con el checkout, este vacio o lleno el shoppingcart me tira el sweetalert D:
function checkout() {
    const cartItems = getProductsJSON();
    if (cartItems.length === 0) {
        alert("sarasa")
    } else { triggerSweetAlertCheckout(); }
}


populateProducts();


