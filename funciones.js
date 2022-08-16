let signoIngresado;
const jugar = document.getElementById("MiBoton");
jugar.addEventListener('click', () => 
{
    signoIngresado = document.getElementById("numero").value;
    signoIngresado = signoIngresado.toLowerCase();
    let opcion=5;
    if (signoIngresado=="tauro"|| signoIngresado=="virgo" ||signoIngresado=="capricornio") {
        opcion="1"
    } else if(signoIngresado=="geminis"|| signoIngresado=="libra"||signoIngresado=="Acuario") { 
        opcion="2"
    }else if(signoIngresado=="cancer"|| signoIngresado=="escorpio" || signoIngresado=="piscis") {
        opcion="3"
    }else if(signoIngresado=="aries"|| signoIngresado=="leo"||signoIngresado=="sagitario"){
        opcion="4"
    }else{
        opcion="5"    
    }//operador lógico or

    switch (opcion) {
        case '1':
        document.getElementById("resultado").innerHTML ="Eres un signo de tierra. 🤎​​"
            break;
        case '2':
            document.getElementById("resultado").innerHTML ="Eres un signo de aire.🌀​🌀​🌀"
            break;
       case '3':
        document.getElementById("resultado").innerHTML ="Eres un signo de agua. 🌊​💧​🌊"
            break;
        case '4':
        document.getElementById("resultado").innerHTML ="Eres un signo de fuego. 🔥🔥​🔥​"
            break;                       
            default:
        document.getElementById("resultado").innerHTML = signoIngresado + " no es un signo :/"
           break;
            }
})
    
amor.addEventListener('click', ()=>{
    let random;
    random= Math.floor(Math.random() * (3 - 1))+ 1;
    (random==1) ? document.getElementById("resultadoAmor").innerHTML ="Te va a ir bien en el amor <3​" : document.getElementById("resultadoAmor").innerHTML ="No creemos que te vaya bien en el amor:C";
 }) //simplificación de un if else(operador ternario)

   
         class Producto {
            constructor(id, nombre, marca, precio , stock, img, alt) {
                this.id = id
                this.nombre = nombre
                this.marca = marca
                this.precio = precio
                this.stock = stock
                this.img = img
                this.alt= alt
            }
        }
        
        const producto1 = new Producto(1, "Libro De Tarot + Mazo Ilustrado", "Jo. Scharegorodskyg", 6900, 10, "./mult/tarotMazoJo.webp", "libro de tarot con su mazo")
        const producto2 = new Producto(2, "Oráculo Flores Místicas", "Cápsula Dorada", 3600, 14, "./mult/oraculoFloresMisticas.webp", "cartas oraculo de flores")
        const producto3 = new Producto(3, "Cartas De Tarot Marselles", "Iluminarte", 1198, 5,"./mult/tarotMerselles.webp", "cartas de tarot")
        const producto4 = new Producto(4, "Cartas Mazo Tarot Español","Arcana Caeli" ,1100, 30,"./mult/tarotEspaniol.webp", "cartas de mazo español")
        const producto5 = new Producto(5, "Astrologia Psicologia Y Los 4 Elementos", "Kier", 3800, 7,"./mult/astrologiaPsicologiaElementos.webp", "libro")
        const producto6 = new Producto(6, "Sahumerio Pirámide Energética", "Sagrada Madre", 500, 20,"./mult/sahumerioPiramide.webp", "sahumerio")
        const producto7 = new Producto(7, "Péndulo Piedra Natural Colgante", "Monkey Jade", 750, 10,"https://http2.mlstatic.com/D_NQ_NP_641577-MLA40512392928_012020-O.webp", "piedra en collar")
        const producto8 = new Producto(8, "Set De Velas De Cera De Soja Aromatizada", "MAGICDECOARGENTINA", 4290, 5,"https://http2.mlstatic.com/D_NQ_NP_843174-MLA48194464092_112021-O.webp", "velas")
        const producto9 = new Producto(9, "El Tarot Paso A Paso", "Marianne Costa", 2950, 10,"https://http2.mlstatic.com/D_NQ_NP_655081-MLA44777314006_022021-O.webp", "libro")

        const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

        productos.forEach(producto => {
            let productoDiv = document.createElement("div")
            productoDiv.id =  `producto${producto.id}`
            productoDiv.className = "card"
            productoDiv.innerHTML = 
            `<div class="card" style="width: auto;">
            <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
             <div class="card-body">
             <h5 class="card-title">${producto.nombre}</h5>
             <p class="card-text">${producto.marca}</p>
             <p class="card-text">$${producto.precio}</p>
            <a href="#" class="btn btn-outline-dark">comprar</a>
             </div>
             </div>`
            divProductos.appendChild(productoDiv)
        })
   