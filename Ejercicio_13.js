// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];
function finderName(list, name) {
  if (list.includes(name)) {
    return `¿Se encuentra ${name} en la lista? ${true} y ¿En que posición? En la número ${list.indexOf(name)}.`
  } else {
    return false;
  }
}
console.log(finderName(nameFinder, "Tony"));

function findName(list2, name2) {
  for (let i = 0; i < list2.length; i++) {
    if (name2 === list2[i]) {
      return `¿Se encuentra ${name2} en la lista? ${true} y ¿En que posición? En la número ${[i]}.`
    }
  } return false;
}
console.log(findName(nameFinder, "Logan"));
