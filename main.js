//Accedemos al DOM

// //Por medio del Id
// const titulo= document.getElementById("tituloPrincipal")
// console.log(titulo)

// //Por Clases
// const nombres=document.getElementsByClassName("nombre")
// console.log(nombres)

// //Por Etiqueta
// const animales=document.getElementsByTagName("li")
// console.log(animales)

// //QuerySelector:Perfmite seleccionar nodods con la misma sintaxis que css
// //solo trae el 1er nodo de esa caracteristica que encuentre

// const queryNombres=document.querySelector(".nombre")
// console.log(queryNombres)

// // querySelectorAll: me trae todos los nodos

// const queryNombresAll=document.querySelectorAll(".nombre")
// console.log(queryNombresAll)


//----------------------------------
//Modificar nodos

//innerText: permite acceder al contenido textual de algun elmento del DOM 
//y modificar de manera dinamica


tituloPrincipal.innerText= "Modificamos el titulo desde main.js"  //busca tituloPrincipal y lo modifica

//innerHTML: permite agregar codigo html en el interior de un nodo (nodo=etiqueta)
const divContenedor=document.getElementById("divContenedor")
divContenedor.innerHTML = `<p> Esto es un párrafo </p>`

divContenedor.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Agregar Carro!</button>
                            </div>`

tituloPrincipal.className="titulo" //acceder al nombre de la contante y con classname insertar un esltilo


//Agregar Nodos
const contenedor=document.getElementById("contenedor")

const parrafo = document.createElement("p")  //crea parrafo
parrafo.innerText="Agregamos parrafo"  //agreganos texto en el parrafo
parrafo.className="titulo"             //damos estilo al parrafo
contenedor.appendChild(parrafo) //concatena todo lo anterior


//Eliminar Nodos
//remove() 
parrafo.remove()

//Crear objetos de forma encapsulada , de forma dinamica

class Producto {
    constructor(nombre,precio){ //clase para pedirle unos nombres y precios
        this.nombre=nombre      
        this.precio=precio
    }

}
            //Productos
const yerba = new Producto ("Yerba",250)
const harina = new Producto ("harina",250)
const azucar = new Producto ("azucar",300)

const arrayProductos= [yerba,harina,azucar]

const contenedorProductos= document.getElementById("contenedorProductos")
                    //recorrido con un foreach
arrayProductos.forEach(producto=>{
    const div=document.createElement("div") //crear div
    div.innerHTML=`<p>Nombre del producto: ${producto.nombre}</p> 
                    <p>Precio del producto:${producto.precio}</p>
                    <button>Agregar al carrito</button>`
                    contenedorProductos.appendChild(div)
})