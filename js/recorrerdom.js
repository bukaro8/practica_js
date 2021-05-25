const parent= document.querySelector('#parent')
// ========Element.parentElement============
// =====devuelve el elemento padre============
// console.log(parent.parentElement)


//  CHILD===============
//     - childNodes -        devuelve todos los nodos hijos
//     - children -          devuelve todos los nodos elementos hijos
//     - firstChild-         devuelve el primer nodo hijos
//     - firstElementChild - devuelve el primer nodo elemento hijos
//     - lastChild-          devuelve el ultimo nodo elemento hijos
//     -lastElementChild-    devuelve el ultimo nodo elemento hijos
//     - hasChildrenNodes()- devuelve true or false si tieno hijos o no

// 1.  childNodes -        devuelve todos los nodos hijos
console.log(parent.childNodes)
// 2.  children -          devuelve todos los nodos elementos hijos
console.log(parent.children)
// 3. firstChild-         devuelve el primer nodo hijos
console.log(parent.firstChild)
// 4. firstElementChild - devuelve el primer nodo elemento hijos
console.log(parent.firstElementChild)
// 5. lastChild-          devuelve el ultimo nodo elemento hijos
console.log(parent.lastChild)
// 6. lastElementChild - devuelve el primer nodo elemento hijos
console.log(parent.lastElementChild)