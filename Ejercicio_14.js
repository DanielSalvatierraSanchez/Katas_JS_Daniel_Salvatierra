// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code']
function repeatCounter(list) {
  const count = {};
  for (const word of counterWords) {
    if (count[word] >= 1) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }
  return count;
}
repeatCounter(counterWords);
console.log(repeatCounter(counterWords));
