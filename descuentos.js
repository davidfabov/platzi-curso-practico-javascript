// const coupon = [
//    {
//      name: "Nunca_pares_de_aprender",
//      discount: 20,
//    },

// {
//     name: "In metrics we trust",
//     discount: 45,
// },

// {
//     name: "Team > heroes",
//     discount: 70,
// }

// ];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function outputPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const result = document.getElementById("ResultParagraph");
    result.innerText = "El precio con descuento es: $" + precioConDescuento;
}