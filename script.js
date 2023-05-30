let array1 = [1,2,3]
const BOCA= ("dale bo")
console.log(array[0])

//POP: elimina el ultimo elemento
array1.pop()

//Push: anade un elemento al array
let a = 1
let b = 2 
array1.push(3.14)
console.log(array1)

//Shift: elimina el primer elemento del array
//unshift: agrega un elemento al principio del array


//indexOF: indica la posicion del elemento que este buscando
console.log (array1.indexOf(1))

//find: puedo encontrar un valor que cumpla con una condicion especifica.
array1.find(element => element >1)

while (b>a) {
    console.log(a); console.log(b)
}

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

for (let x=0 ; x<10 ; x++){
     console.log(x);
}