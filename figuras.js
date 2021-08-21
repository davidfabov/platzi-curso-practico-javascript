// Codigo del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado
}
// console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();


// Código del triangulo
console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
// console.log(`El área del triángulo es de: ${areaTriangulo}cm^2`);

// console.groupEnd();

// Código del circulo
console.group('Circulo');

//Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log(`El diámetro del circulo es: ${diametroCirculo}cm`);

//Pi
const PI = Math.PI;
console.log(`Pi es: ${PI}`);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`El perímetro del circulo es: ${perimetroCirculo}cm`);

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log(`El área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

