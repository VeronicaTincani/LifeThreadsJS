        /*STOCK DE PRODUCTOS*/
        class Producto {
            constructor(id, nombre, marca, precio, stock, img, alt, cantidad) {
                this.id = id
                this.nombre = nombre
                this.marca = marca
                this.precio = precio
                this.stock = stock
                this.img = img
                this.alt = alt
                this.cantidad = 0
            }
        }
        const producto0 = new Producto(0, "Libro De Tarot + Mazo", "Jo. Scharegorodskyg", 6900, 10, "./mult/tarotMazoJo.webp", "libro de tarot con su mazo")
        const producto1 = new Producto(1, "Oráculo Flores Místicas", "Cápsula Dorada", 3600, 14, "./mult/oraculoFloresMisticas.webp", "cartas oraculo de flores")
        const producto2 = new Producto(2, "Cartas De Tarot Marselles", "Iluminarte", 1198, 5, "./mult/tarotMerselles.webp", "cartas de tarot")
        const producto3 = new Producto(3, "Mazo Tarot Español", "Arcana Caeli", 1100, 30, "./mult/tarotEspaniol.webp", "cartas de mazo español")
        const producto4 = new Producto(4, "Astrologia Psicologia Y Elementos", "Kier", 3800, 7, "./mult/astrologiaPsicologiaElementos.webp", "libro")
        const producto5 = new Producto(5, "Sahumerio Pirámide", "Sagrada Madre", 500, 20, "./mult/sahumerioPiramide.webp", "sahumerio")
        const producto6 = new Producto(6, "Péndulo Colgante", "Monkey Jade", 750, 10, "https://http2.mlstatic.com/D_NQ_NP_641577-MLA40512392928_012020-O.webp", "piedra en collar")
        const producto7 = new Producto(7, "Set De Velas", "MAGICDECOARGENTINA", 4290, 5, "https://http2.mlstatic.com/D_NQ_NP_843174-MLA48194464092_112021-O.webp", "velas")
        const producto8 = new Producto(8, "El Tarot Paso A Paso", "Marianne Costa", 2950, 10, "https://http2.mlstatic.com/D_NQ_NP_655081-MLA44777314006_022021-O.webp", "libro")

        const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]
        /*FIN DE STOCK*/




        const contenedorProductos = document.getElementById('contenedor-productos')
        const contenedorCarrito = document.getElementById('carrito-contenedor')
        const botonVaciar = document.getElementById('vaciar-carrito')
        const contadorCarrito = document.getElementById('contadorCarrito')
        const cantidad = document.getElementById('cantidad')
        const precioTotal = document.getElementById('precioTotal')
        const cantidadTotal = document.getElementById('cantidadTotal')
        const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
        const botonAbrir = document.getElementById('boton-carrito')
        const botonCerrar = document.getElementById('carritoCerrar')
        const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


        botonAbrir.addEventListener('click', () => {
            contenedorModal.classList.toggle('modal-active')
        })
        botonCerrar.addEventListener('click', () => {
            contenedorModal.classList.toggle('modal-active')
        })

        contenedorModal.addEventListener('click', (event) => {
            contenedorModal.classList.toggle('modal-active')

        })
        modalCarrito.addEventListener('click', (event) => {
            event.stopPropagation()
        })

        let carrito = []

        document.addEventListener('DOMContentLoaded', () => {
            if (localStorage.getItem('carrito')) {
                carrito = JSON.parse(localStorage.getItem('carrito'))
                actualizarCarrito()
            }
        })


        botonVaciar.addEventListener('click', () => {
            carrito.length = 0

            const vaciarCantidadCarrito = (prodId) => {

                const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
                    // map encuentre cual es el q igual al que está agregado, le suma la cantidad
                    if (prod.id === prodId) {
                        prod.cantidad = 1
                    }
                })
            }
            actualizarCarrito()
        })


        productos.forEach((producto, index) => {

            let productoDiv = document.createElement("div")

            productoDiv.id = `producto${producto.id}`

            productoDiv.className = "card"

            productoDiv.innerHTML =

                `<div class="card" style="width: auto;">

            <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">

            <div class="card-body">

            <h5 class="card-title">${producto.nombre}</h5>

            <p class="card-text">${producto.marca}</p>

            <p class="card-text">$${producto.precio}</p>

            <button class="btn btn-outline-dark" id="comprarBtn${index}">Comprar</button>

            </div>`

            divProductos.appendChild(productoDiv)

            const comprarBtn = document.getElementById(`comprarBtn${index}`)

            comprarBtn.addEventListener('click', () => {
                agregarAlCarrito(index)
            })
        })

        const finalizarCompra = document.getElementById('finalizar-compra')

        finalizarCompra.addEventListener('click', () => {
            Swal.fire(
                '¡Tu compra se ha realizado con éxito!',
                'En breve nos estaremos comunicando vía mail',
                'success'
            )

        })


        const agregarAlCarrito = (prodId) => {

            
            const existe = carrito.some(prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

            if (existe) { //si ya esta en el carrito, actualiza la cantidad
                const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
                    // map encuentre cual es el q igual al que está agregado, le suma la cantidad
                    if (prod.id === prodId) {
                        prod.cantidad++
                    }
                })
            } else { //en caso de que no este se agrega curso al carrito
                const item = productos.find((prod) => prod.id === prodId) //Trabajamos con las ID
                //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
                carrito.push(item)
                const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
                    // map encuentre cual es el q igual al que está agregado, le suma la cantidad
                    if (prod.id === prodId) {
                        prod.cantidad++
                    }
                })
            }
            //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
            //el carrito y se ve.
            actualizarCarrito() //llamo a la funcion cada vez que se modifica el carrito
        }

        const eliminarDelCarrito = (prodId) => {
            const item = carrito.find((prod) => prod.id === prodId)

            const indice = carrito.indexOf(item) //Busca el elemento que le pase y nos devuelve su indice.

            carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
            // un elemento 
            actualizarCarrito() //llamo a la funcion cada vez que se actualiza el carrito
            console.log(carrito)

        }


        const actualizarCarrito = () => {

            contenedorCarrito.innerHTML = "" //Cada vez que llame a actualizarCarrito, lo primero que hago
            //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
            //actualizado


            //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
            carrito.forEach((prod) => {
                const div = document.createElement('div')
                div.className = ('productoEnCarrito')
                div.innerHTML = `
            <p>${prod.nombre}</p>
            <p>Precio:$${prod.precio}</p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="48" height="48"
            viewBox="0 0 48 48"
            style=" fill:#000000;"><path fill="#9575CD" d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"></path><path fill="#7454B3" d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"></path><path fill="#B39DDB" d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"></path></svg></i></button>
            `

                contenedorCarrito.appendChild(div)

                localStorage.setItem('carrito', JSON.stringify(carrito))

            })

            contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.

            console.log(carrito)
            precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
            //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
            //empezando en 0.

        }