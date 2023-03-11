// vars
shoppingCart = [];

const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cartItems");
const totalPrice = document.getElementById("total-price")


// Funciones


function totalSum(burger) {
    let total = burger.reduce(function (acc, burger) { return acc + burger.price; }, 0);
    saveStorage(total)
    return total
}

function saveStorage(total) {
    sessionStorage.setItem("total", JSON.stringify(total));
}

function getProductsJSON() {
    return fetch('products.json')
            .then(products => {
                products.json();})
        .then((data) => {return data;})
}

// remove 
function removeBurger(id) {
    shoppingCart = shoppingCart.filter((burger) => {
        return burger.id !== id;
    })
    const renderedCartProducts = shoppingCart.map((product) => {
        const { id, image, description, title, price } = product;
        return `<div class="cart-items">
        <div class="item">
            <div class="item-name">${title}</div>
        <div class="item-price">$${price}</div>
            <button class="remove-item" id="${id}">Remove</button>
    </div>
    $${totalPrice}`
    })
    cartContainer.innerHTML = renderedCartProducts.join('');
    totalPrice.innerHTML = `$ ${totalSum(shoppingCart)}`;
};

function triggerSweetAlert(title, message, alertType) {
    Swal.fire({
        title: "Burger Agregada!",
        text: "El item se agrego al carrito",
        icon: "success",
        confirmButtonText: 'OK',
        buttons: {
            confirm: {
                text: "Ver Carrito",
                value: true,
                visible: true,
                className: "btn btn-primary",
                closeModal: true
            },
            cancel: {
                text: "Seguir Comprando",
                value: false,
                visible: true,
                className: "btn btn-secondary",
                closeModal: true,
            }
        }
    }).then((value) => {
        if (value) {
            // redirigirse
            window.location.href = "#";
        } else {
            // quedarse
        }
    });
}

debugger;
const products = []

// map

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
                <a href="#" class="btn-cart" id="${id}">Agregar al pedido</a>
        </div>
    </div>
    </div>`
})


productContainer.innerHTML = renderedProducts.join('')

let buttonAddToCart = document.querySelectorAll(".btn-cart");
// add al carrito
buttonAddToCart.forEach(button => {
    button.addEventListener("click", () => {
        const product = products.find((product) => {
            return (product.id === button.id)
        })
        shoppingCart.push(product);
        const renderedCartProducts = shoppingCart.map((product) => {
            const { id, image, description, title, price } = product;
            return `<div class="cart-items">
                <div class="item">
                    <div class="item-name">${title}</div>
                <div class="item-price">$${price}</div>
                    <button class="remove-item" id="${id}">Remove</button>
            </div>
            <div id="total-price">$${totalPrice}</div>`
        })
        cartContainer.innerHTML = renderedCartProducts.join('');
        totalPrice.innerHTML = `$ ${totalSum(shoppingCart)}`;
        triggerSweetAlert();
    });
})


// <div><img class="card-img-top img-thumbnail" src="/${image}">  ${title}  $${price}</div>
//   <button class="btn btn-remove-cart" type="button" onclick="removeBurger('${id}')">Remover</button>

