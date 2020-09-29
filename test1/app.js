// shift -> remueve el primero
// pop ->remueve el ultimo
// push -> añade un elemento al final
// unshift -> añade un elemento al inicio
// splice(posicionArray, cantidadDeElementosAEliminar)

let nombre = "5x";
const test1 = [1,2,3];
const test2 = new Array('1','2','3');
const test3 = new Array('1',2,{nombre: 'pamela'},null, {nombre: 'pamela', trabajo: 'xd'}, [1,2,3])
test1.push(4);
test1.push('5')
test2.push(4)
test2.push({nombre: 'xD'})
test3.unshift('wom')
test3.pop()
test1.shift()
test2.splice(1,2)
console.log(test1);
console.log(test2);
console.log(test3);
document.getElementById('app').innerHTML = `Edad ${test1}`;