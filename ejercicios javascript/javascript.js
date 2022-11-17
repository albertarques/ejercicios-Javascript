console.log("Ejercicios Javascript!");

function suma(numero1, numero2) {
  console.log(numero1 + numero2);
}
suma(3, 5);

function fizzBuzz() {
  let i = 0;
  for (i = 1; i < 100; i++) {
    if (i % 15 == 0) {
      console.log(`${i}: Fizz Buzz`);
    } else if (i % 3 == 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i}: Buzz`);
    }
  }
}
fizzBuzz();

function esNumeroPar(numero) {
  if (numero % 2 == 0) {
    console.log(numero);
  }
}
esNumeroPar(5);

const carro = {
  color: "Rojo",
  numRuedas: 4,
  numPuertas: 3,
  potenciaCv: 500,
  energia: "Eléctrico",
  marca: "Ferrari",
  ruedas: {
    delanteras: {
      izquierda: "ok",
      derecha: "ok",
    },
    traseras: {
      izquierda: "ok",
      derecha: "ok",
    },
  },
};

function deQueMarca() {
  console.log(`
De que marca es el carro?
Respuesta: ${carro.marca}
              `);
}
deQueMarca();

let numeros = [];
let numero = 0;

console.log(numeros.length);

if (numeros.length == 0) {
  for (numero = 1; numero <= 10; numero++) {
    numeros.push(numero);
  }
  console.log(numeros);
}

function recorrerArray(array) {
  for (element of array) {
    console.log(element);
  }
}
recorrerArray(numeros);

function eliminarParesArray() {
  for (element of numeros) {
    if (element % 2 == 0) {
      numeros.splice(numeros.indexOf(element), 1);
    }
  }
}
eliminarParesArray();
console.log(numeros);

function numeroMayor(array) {
  let numMayor = Math.max(...array);
  console.log(`El numero mayor es: ${numMayor}`);
}
numeroMayor(numeros);

function numeroMenor(array) {
  let numeroMenor = Math.min(...array);
  console.log(`El numero menor es: ${numeroMenor}`);
}
numeroMenor(numeros);

function enMayusculas() {
  let text = "lorem ipsum dolor sit amet";
  console.log(text.toUpperCase());
}
enMayusculas();

function enMinusculas() {
  let text = "LOREM IPSUM DOLOR SIT AMET";
  console.log(text.toLowerCase());
}
enMinusculas();

let nombres = ["andrés", "fátima", "carmelo", "pol"];

function arrayUppercase(array) {
  let arrayLength = array.length;
  while (arrayLength <= array) {
    for (element of array) {
      let initial = element.charAt(0).toUpperCase();
      let char = element[0];
      let newElement = element.replace(char, initial);
      array.push(newElement);
      console.log(array);
      array.shift();
    }
  }
}
arrayUppercase(nombres);
