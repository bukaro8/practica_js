const days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const title=document.querySelector('#title');
const dayList= document.querySelector('#dayList');
const selectDays= document.querySelector('#selectDays');

//Crear un elemento document.createElement('element name')
  
  
  
  // UNA VEZ CREADO EL ELEMENTO PODEMOS AGREGARLO A ALGO 
  // POR MEDIO DE parent.appendChild(elemento)
  // dayList.appendChild(itemList)
  const fragment= document.createDocumentFragment()
  
  for(day of days){
    const itemList= document.createElement('LI');
    itemList.innerHTML = day
    fragment.appendChild(itemList)
  }
  dayList.appendChild(fragment)

  const fragment2=document.createDocumentFragment()
  for(day of days){
  const optionItem=document.createElement('option')
  optionItem.setAttribute('value',day.toLowerCase())
  optionItem.textContent= day
  fragment2.appendChild(optionItem)}
  selectDays.appendChild(fragment2)

  

