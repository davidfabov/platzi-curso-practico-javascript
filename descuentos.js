const coupon = [
   "Nunca_pares_de_aprender",
   "In metrics we trust",
   "Team > heroes",

];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function outputPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    switch(couponValue) {
        case "Nunca_pares_de_aprender":
            descuento = 20;
            break;
        case "In metrics we trust":
            descuento = 45;
            break;
        case "Team > heroes":
            descuento = 60;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const result = document.getElementById("ResultParagraph");
    result.innerText = "El precio con descuento es: $" + precioConDescuento
    
}

