// Codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}


// Código del triangulo


function perimetroTriangulo (lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}


// Código del circulo

const PI = Math.PI;

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


// Aquí interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const inputSide = document.getElementById("InputSide");
    const sideValue = inputSide.value;

    const inputBase = document.getElementById("InputBase");
    const baseValue = inputBase.value;

    const perimetro = perimetroTriangulo(value, sideValue, baseValue);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    const inputHeight = document.getElementById("InputAltura");
    const valueHeight = inputHeight.value;

    const area = areaTriangulo(valueBase,valueHeight);
    alert(area);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}


function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}