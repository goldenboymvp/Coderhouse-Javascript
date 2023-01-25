let menu = "";
let precioTotal = 0;
let space = " "

while (menu !== "salir") {
    menu = prompt("ingrese las Hamburguesas deseadas");
    switch (menu) {
        case "Doble cheese":
        case "Single bacon":
            precioTotal = precioTotal + 1000
            break;
        case "Triple cheese":
        case "Doble bacon":
            precioTotal = precioTotal + 1200
            break;
        case "Doble tasty":
        case "Triple bacon":
            precioTotal = precioTotal + 1400
            break;
        case "Golden deluxe":
            precioTotal = 1500
            break;
    }
}
menu = prompt("Queres agregar papas fritas por $300, Si/No");
if (menu === "si") {
    precioTotal = precioTotal + 300
}
alert("El precio total es de $" + precioTotal);


