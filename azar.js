let signoIngresado;
const jugar = document.getElementById("MiBoton");
jugar.addEventListener('click', () => 
{
    signoIngresado = document.getElementById("numero").value;
    signoIngresado = signoIngresado.toLowerCase();
    let opcion=5;
    if (signoIngresado=="tauro"|| signoIngresado=="virgo" ||signoIngresado=="capricornio") {
        opcion="1"
    } else if(signoIngresado=="geminis"|| signoIngresado=="libra"||signoIngresado=="acuario") { 
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
        document.getElementById("resultado").innerHTML = signoIngresado + "escriba su signo"
        break;
            }
})
    
amor.addEventListener('click', ()=>{
    let random;
    random= Math.floor(Math.random() * (3 - 1))+ 1;
    (random==1) ? document.getElementById("resultadoAmor").innerHTML ="Te va a ir bien en el amor <3​" : document.getElementById("resultadoAmor").innerHTML ="No creemos que te vaya bien en el amor </3";
 }) //simplificación de un if else(operador ternario)
