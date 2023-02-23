// ``
shoppingCart = [];

const productContainer = document.getElementById("product-container");
const cartContainer = document.getElementById("cartItem");
const totalPrice = document.getElementById("total-price")

function totalSum(burger) {
    let total = burger.reduce(function (acc, burger) { return acc + burger.price; }, 0);
    saveStorage(total)
    return total
}

function saveStorage(total) {
    sessionStorage.setItem("total", JSON.stringify(total));
}

function removeBurger(id) {
    shoppingCart = shoppingCart.filter((burger)=> {
        return burger.id !== id;
    })
    const renderedCartProducts = shoppingCart.map((product) => {
        const { id, image, description, title, price } = product;
        return `<div><img class="card-img-top img-thumbnail" src="/${image}">  ${title}  $${price}</div>
        <button class="btn btn-remove-cart" type="button" onclick="removeBurger('${id}')">Remover</button>`
    })
    cartContainer.innerHTML = renderedCartProducts.join('');
    totalPrice.innerHTML = `$ ${totalSum(shoppingCart)}`;
};


const products = [
    {
        id: "burger1",
        image: 'imgs/burger1.png',
        description: 'Doble Patty y Cuatro fetas de cheddar',
        title: 'Double Cheeseburger',
        price: 1200.0
    },
    {
        id: "burger2",
        image: 'imgs/burger2.png',
        description: 'Triple Patty y seis fetas de cheddar',
        title: 'Triple Cheeseburger',
        price: 1400.0
    },
    {
        id: "burger3",
        image: 'imgs/burger3.png',
        description: 'Doble Patty, Cuatro fetas de cheddar, rodajas de tomate y Lechuga',
        title: 'American Cheeseburger',
        price: 1300.0
    },
    {
        id: "burger4",
        image: 'imgs/burger4.png',
        description: 'Doble Medallon de pollo, Cuadruple cheddar, rodajas de tomate y Lechuga',
        title: 'American Chicken',
        price: 1300.0
    },
    {
        id: "burger5",
        image: 'imgs/burger5.png',
        description: 'Triple patty, Triple cheddar, 6 tiras de bacon americano y Mayonesa',
        title: 'Triple Bacon',
        price: 1400.0
    },
    {
        id: "burger6",
        image: 'imgs/burger6.png',
        description: 'Triple patty, Triple cheddar, Cebolla crispy, ketchup y salsa GOLDEN',
        title: 'GOLDEN Deluxe',
        price: 1500.0
    },
]

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

buttonAddToCart.forEach(button => {
    button.addEventListener("click", () => {
        const product = products.find((product) => {
            return (product.id === button.id)
        })
        shoppingCart.push(product);
        console.log(shoppingCart);
        const renderedCartProducts = shoppingCart.map((product) => {
            const { id, image, description, title, price } = product;
            return `<div><img class="card-img-top img-thumbnail" src="/${image}">  ${title}  $${price}</div>
            <button class="btn btn-remove-cart" type="button" onclick="removeBurger('${id}')">Remover</button>`
        })
        cartContainer.innerHTML = renderedCartProducts.join('');
        totalPrice.innerHTML = `$ ${totalSum(shoppingCart)}`;
    })
});


