// Codigo del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();


// Código del triangulo
console.group('Triangulos');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

// Código del circulo
console.group('Circulo');

//Radio
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del circulo es: ${diametroCirculo}cm`);

//Pi
const PI = Math.PI;
console.log(`Pi es: ${PI}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del circulo es: ${perimetroCirculo}cm`);

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();

