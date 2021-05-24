// ==============document.getElementbyId('id')===============
const title= document.getElementById('title');
// ===============document.querySelector(class or id or tag)
const titleQuery= document.querySelector('#title'); 
// =============================================================

// Atributos
    // element.getAttribute('attribute') devuelve el atributo
    // element.setAttribute('attribute',value)cambia o asigna un atributo
    const name1= document.querySelector('#name');
    console.log(name1.getAttribute('type'))//devuelve el tipo de atributo de title el cual seria text
    // -----------setAttribute('atributo',nuevoValor)
    name1.setAttribute('type','date')//cambiaria el tipo de atributo de text a date

//Clases
    // element.classList.add('class', 'class',...)    adhiere una nueva clase
    // Element.classList.remove('class','class'...)   remueve una/s clase
    //element.classList.toggle('class',[force])       si tiene la clase se la quita y si no la tiene la pone
    //element.classList.contains('class')
    //element.classList.replace('oldClass',newclass)  
    
    title.classList.add('main-title','other-title','title')//crearia dos nuevas clases en title
    title.classList.remove('main-title')//elimina una clase en title
    title.classList.contains('other-title')?console.log('si existe la clase'):console.log('no tiene la clase')
    // devuelve true of false si encuentra o no la clase
    title.classList.replace('title','main-title') //remueve y adiciiona un atributo
    console.log(title)


