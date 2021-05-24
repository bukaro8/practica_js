
const numbers=[1,9,300,3,400,900,9];
// ===========sort()===========
// ordena de manera decendente
          // console.log(numbers.sort((a,b)=>a-b))
          // // ordena de manera acendente
          // console.log(numbers.sort((a,b)=>b-a))


// ==========forEach()===============
// recorre el array 
      // // numbers.forEach((number)=>{console.log(number)})
      // numbers.forEach((number, index)=>console.log(`${number} y esta en la pocision ${index}`))

      // ===========some/every=========
  // some() recorrera el array y buscara si algun elemento comple con el parametro
  // every() recorrera el array y buscara si todos los elementos cumple con el parametro
  const words=['perro','gato','pinguino','lagarto'];
      // console.log(words.some((word)=> word.length>5))//retorna true ya que alguno de los datos cumple
      // console.log(words.every((word)=>word.length>5))//retorna false porque no todos cumplen
  
      // =============Map()=============
    // console.log(numbers.map((number)=>number*2))

    // ==============Filter()
  // filtra el array con las condiciones que le demos 
    // console.log(numbers.filter((number)=>number>40))

    // ====================reduce()
    // devuelve la suma de todo el array
    // console.log(numbers.reduce((accumulator,currentValue)=>accumulator+currentValue))

    // =====================spread operator
    // tiene varios usos entre ellos esta el desglosar un array y devolver solo sus valores
    let newArray=[...numbers,...words];
    // resultado seria newArray=[1, 3, 400, 900, 9, "perro", "gato", "pinguino", "lagarto"]
    // podemos usarlo como parametro en una funcion cuando no sabemos el numero exacto de parametros
    // let imprimirFunction=(...numbers)=>console.log(numbers);
    // imprimirFunction(numbers)
    // =============eliminar elementos duplicados
    new Set(numbers)// de esta manera devolveria un objeto{} sin datos duplicados
    let arraySinDuplicados=[...new Set(numbers)].sort((a,b)=>a-b);
    // asi obtendria un nuevo array ordernado y sin elementos duplicadoss
    