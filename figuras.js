// Codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}


// Código del triangulo

altura = Math.random()*(5-8)+8;

function perimetroTriangulo (lado) {
    return lado * 3;
}

function areaTriangulo (base) {
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

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
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