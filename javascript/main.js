
function Burger (name, description, price, stock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
}

const burgers = [];

burgers.push(new Burger('Doble Cheeseburger', 'x2 patty, x4 cheddar, BBQ sauce', 1200.0,true));
burgers.push(new Burger('Triple Cheeseburger', 'x3 patty, x6 cheddar, BBQ sauce', 1400.0,true));
burgers.push(new Burger('American Cheeseburger', 'x2 patty, x4 cheddar, x2 tomate, 1 lechuga', 1400.0,true));
burgers.push(new Burger('American Chicken', 'x2 chicken breast, x4 cheddar, x2 tomate, x1 lechuga', 1300.0,true));
burgers.push(new Burger('Triple Bacon', 'x3 patty, x6 cheddar, x6 bacon, BBQ sauce', 1400.0,true));
burgers.push(new Burger('GOLDEN Deluxe', 'x3 patty, x3 cheddar, x2 crispy onion, x1 ketchup, GOLDEN sauce', 1500.0, true))

function wrongRequest() {
    alert("Error, datos ingresados incorrectos")
}

function requestBurger(burgerName) {
    let filteredBurger = burgers.filter(burger=>burger.name.toLowerCase()==burgerName.toLowerCase());
    if (filteredBurger.length>0) {
        return filteredBurger[0] 
    } else {
        return null
    }
}

function totalSum(burgers) {
    return burgers.reduce(function (acc, burger) { return acc + burger.price; }, 0);
}

let request = '';
const order = [];

while(request !== 'salir') {
    alert('Bienvenido a GOLDEN Burgers a continuacion le dejamos el menu, ingrese los nombres de las hamburguesas deseadas o ingrese "salir" para terminar el pedido\n\nDoble Cheese:\nx2 patty, x4 cheddar, salsa barbacoa\nSingle Bacon:\nx1 patty, x2 Bacon, x2 cheddar, salsa barbacoa\nTriple cheese:\nx3 patty, x6 cheddar, salsa barbacoa\nDoble Bacon:\nx2 patty, x4 Bacon, x4 cheddar, salsa barbacoa\nDoble Tasty:\nx2 patty, x4 cheddar, lechuga, pickles, salsa tasty\nTriple Bacon:\nx3 patty, x6 cheddar, x6 bacon, salsa barbacoa\nGolden Deluxe:\nx3 patty, x6 cheddar, x2 bacon, pickles, huevo frito, salsa golden, barbacoa')
    request = prompt('Ingresa el nombre de la hamburguesa deseada');

    if (request !== 'salir') {
        let burger = requestBurger(request);
        if (burger !== null) {
                order.push(burger);
        } else {
            wrongRequest();
        }
    } 
}
let priceTotal = totalSum(order);
alert("El valor del pedido es $" + priceTotal);





