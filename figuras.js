//Código del Cuadrado
console.group('Cuadrados')

// const ladoCuadrado = 5
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cms`)

function perimetroCuadrado(lado) {
  return lado* 4
}
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cms`)

function areaCuadrado(lado) {
  return lado * lado
}
// console.log( `El area del cuadrado es: ${areaCuadrado} cms^2`)
console.groupEnd()


//Código del Triangulo
console.group('Triángulos')

// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4

// console.log(
//   `Los lados del triangulo miden: ${ladoTriangulo1} cms
//   y la base del triangulo mide ${baseTriangulo} cms`
// )

// const alturaTriangulo = 5.5
// console.log(`La altura del triángulo es: ${alturaTriangulo} cms`)

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cms`)

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log( `El area del triángulo es: ${areaTriangulo} cms^2`)

function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
console.groupEnd()


//Código del Circulo
console.group('Circulos')

//Radio
// const radioCirculo = 4
// console.log(`El radio del circulo es: ${radioCirculo} cms`)

//Diámetro
// const diametroCirculo = radioCirculo * 2
// console.log(`El diámetro del circulo es: ${diametroCirculo} cms`)

function diametroCirculo(radio) {
  return radio * 2
}

//PI
const PI = Math.PI
console.log(`PI es igual a: ${PI}`)

//Circunferencia
// const perimetroCirculo =  diametroCirculo * PI
// console.log(`El perímetro del circulo es: ${perimetroCirculo} cms`)

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return diametro * PI
}

//Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log( `El area del circulo es: ${areaCirculo} cms^2`)

function areaCirculo(radio) {
  return (radio * radio) * PI
}

console.groupEnd()