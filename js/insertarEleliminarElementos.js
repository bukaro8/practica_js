// insertar y eliminar elementos
  // insertar un elemento antes del elemento referencia
  // parent.insertBefore(newElement, referenceElment)

  const parent= document.querySelector('#parent');
  const newElement=document.createElement('li');
  // =======================
  //   INSERTARIA UN NUEVO ELEMENTO EN EL TOP DE LA LISTA[0
  //   ===================================================]
  newElement.innerHTML= 'soy un nuevo elemento'
  // parent.insertBefore(newElement,parent.children[0])
  

  // ========parent.insertAdjacentElement('position',newElement)
  /* POSICIONES====================
    beforebegin   = antes de que empieze el hermano anterior
    afterbegin    = despues de que empieze el primer hijo
    berforeend    = antes de que acabe
    afterend      = despues que acabe
    REPLACE CHILD
    parent.replaceChild(newChild,oldChild)
    */

  // 1. beforebegin   = antes de que empieze el hermano anterior
  // parent.insertAdjacentElement('beforebegin',newElement)
  // 2. afterbegin    = despues de que empieze el primer hijo
  // parent.insertAdjacentElement('afterbegin',newElement)
  // REPLACE CHILD
  // parent.replaceChild(newElement,parent.children[0])

  // =========================================================
    // ======================jquery-like ======================
      // parent.before(newElement) antes de que empieze
      // parent.prepend(newElement)  despues de que empieze
      // parent.append(newElement) antes de que acabe
      // parent.after(newElement) despues de terminado
      // CLONAR Y ELEMINAR ELEMENTOS
      parent.after(parent.cloneNode(true))
