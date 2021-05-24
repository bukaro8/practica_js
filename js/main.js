// const numbers = document.getElementById('numbers');
// const result = document.getElementById('result');

// let a= parseInt(prompt('introduce a number'));
// let b= parseInt(prompt('introduce a number'));
// let c= parseInt(prompt('introduce a number'));

// let array=[]
// array.push(a,b,c);
// 

// numbers.textContent=` you have entered ${a}, ${b}, ${c}. The order is ${array.sort()} `

// ejercicio 1.

// let name= prompt("what's your name?");
// let age= parseInt(prompt("what's your age?"));

// result.textContent=`Hi ${name}, you are ${age} years old and next year you will be ${age+1} years old`

// ejercicio 2
// let areaCircle=(radio)=>{
//   results.textContent=`el area del circulo es ${Math.pow(radio,2)*Math.PI};`};
//   areaCircle(parseInt(prompt('type the radio')))

// ejercicio3
// let oddNumber=(num)=>{
//   for(let i=1; i<=num; i++){
//     console.log(`${i} ${i%2===0?'es par':'es impar'}`)
//   }
  
// }
// oddNumber(parseInt(prompt('give me a number')))


// ejercicio 4

// let primo=(num)=>{
//   if(typeof num==='number' && Number.isInteger(num)){
//     if(num<2){
//       alert('introduce a valid number between 2 and mi nero');}
//       else if(num==2||num==3||num==5||num==7){
//         results.textContent=`el numero ${num} es primo`}
//         else if(num%2==0 || num%3==0 || num%5==0 ||num%7==0){
//           results.textContent=`el numero ${num} no es primo`
//             }else results.textContent=`El numero ${num} es primo`
//   }else alert('introduce a valid number between 2 and n')
  
// }
// primo(parseInt(prompt('introduzca un numero')))

// ejercicio 5

// let factorial=(num)=>{
//   let result=num;
//     for(let i=num-1; i>=1; --i){
//       result=result*i
//     }
//   results.textContent=`the factorial of ${num} is ${result}`
// }
// factorial(parseInt(prompt('introduce a number between 2 and n')))

// ejercicio 6
// let sum=0
// let arr=[]
// while(sum<50){
//   num=parseInt(prompt('introduce a number'));
//     if (sum+num>50){alert('the number is too high')}
//     else {
//     sum+=num;
//     arr.push(num);
//     }
//   }results.textContent=`you have introduced ${arr.slice()} and that is  ${sum}`

// ejercicio 7
// let arr=[2,3,4,5,6];
// let pares=[];
// let inpares=[];
// let findPares=()=>{
//   let ramd=Math.floor((Math.random()*(1+10-1)+1))
//   for (num of arr){
//     (num*ramd)%2==0?pares.push(num*ramd):inpares.push(num*ramd)
//   }
  
//   results.textContent=(`el numero ramdon fue ${ramd} el resultado fueron ${pares.length} numeros. y el array es ${pares.toString().replaceAll(',',', ')}`);
//   results2.textContent=(`el numero ramdon fue ${ramd} el resultado fueron ${inpares.length} numeros. y el array es ${inpares.toString().replaceAll(',',', ')}`);
// }
// findPares()
// ejercicio 8
// const letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
// let DNIletra=(dni)=>{
// if(typeof dni=='number' && Number.isInteger(dni) &&  dni.toString().length<=8 && dni>=1){
// let modulo=dni%23
// results.textContent=`tu DNI completo es ${dni}${letras[modulo]}`
// else alert('not a  valid number. the number must be less than 8 digits')
// }
// DNIletra(parseInt(prompt('introduzca el dni')))
// ejercicio 9

// let vocales=(word)=>{ 
//   let pal=word.split('');
//   let vowel=[];
//   let consonant=[];
//   for(let i=0;i<pal.length; i++){
//     if(pal[i]=='a'|| pal[i]=='e'|| pal[i]=='i' ||pal[i]=='o'|| pal[i]=='u' ){
//         vowel.push(pal[i])
//     }else consonant.push(pal[i])
//   }
//   results.textContent=`la palabra "${word}" tiene ${vowel.length} vocales ( ${vowel.slice()} ) y ${consonant.length} consonantes ( ${consonant.slice()} )`
// }
// vocales(prompt('introduce una palabra').toLowerCase())

// ejercicio 10

// let colors=['azul','amarillo','rojo','verde','rosa'];
// let findColor=(userColor)=>{
//   colors.includes(userColor)?results.textContent= 'el color se encuentra en el array':results.textContent='no esta'
//   // for (color of colors){
//   //       if (color==userColor){
//   //     results.textContent= 'el color se encuentra en el array'
//   //   }
//   // }
// }
// findColor(prompt('intruduzca un color').toLowerCase())


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =================================================================

// ========================OBJETOS==========================
// ================================================================
// ===============================================================#
// const person={
//  name:'Juan',
//  age:30,
//  children:['Laura', 'Diego', 'Pepe','Rosa', 'Tomas'],
// }
// console.log(person['name'])
// console.log(person.name)
// ===================================================================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//you can call the propeties of the object with object.property or object['propetyName']
// =====================================================================
// for (const key in person){
//   console.log(key)
// }
// this will only show the name of the property NamedNodeMap, age, children.
// ==========================================================================
// for (const key in person){
//   console.log(person[key])
// }
// this shows the data of each property
// ==================================================================
// =================================================================
// for (child of person.children){
//   console.log(child)
// }
// for (let i=0; i<person['children'].length;i++){
//   console.log(person['children'][i])
// }
// these two are equivalent. and they will go throught the array
// ======================================================================
// console.log(`Hola mi nombre es ${person['name']}, tengo ${person.age} y ${person['children'].length} hijos. Sus nombres son ${person.children.join(', ')}`); 
  class Book{
    constructor(title,author,year,genre){
      this.title=title
      this.author=author
      this.year=year
      this.genre=genre
    }
    bookInfo(){return `the books title is ${this.title} and the author was ${this.author}. It was written on ${this.year} and the genre is ${this.genre}`};
    
    
  }

  let books=[]
for(let i=0; i<10;i++){
  let title='book'+i;
  let author='author'+i;
  let year=1234;
  let genre= 'terror';
  books.push(new Book(title,author,year,genre))
}
// -----------muerstra todos los libros en consola
// let allbooks=()=> {
//   for(book of books){
//   console.log(book)}
// }
// allbooks();
// =======================
// ==========================orderna los autores
// const orderAuthor=()=>{
//   let authors=[];
//   for(let i=0;i<books.length;i++){
//     authors.push(books[i].author)
//   }
//   console.log(authors.sort())
// }
// orderAuthor()
// ==============================



//   while(books.length<2){
//     let title= prompt('introduzca el nombre del libro');
//     let author=prompt('inroduzca el nombre del autor ');
//     let year=  prompt('año en que fue escrito');
//     let genre= prompt('genero del libro').toLowerCase();
//     title !='' && author!=''&& !isNaN(year) && year.length==4 && (genre!='aventura'|| genre !='terror'|| genre !='fantasia')?
//     books.push(new Book(title,author,year,genre)):alert ('invalid data');
// }
// let orderAuthors=()=>{ 
//   for( author of books){
//       console.log(books['author'].sort())
// }}
// books.orderAuthors();
// book.allBooks();
// ==================
const genreInfo=()=>{
  let searchGenre= prompt('intruduce a genre to search');
  for (let i=0; i<books.length; i++){
        if (books[i]['genre']== searchGenre){console.log(books[i].bookInfo())
  }
  }
}
genreInfo();
