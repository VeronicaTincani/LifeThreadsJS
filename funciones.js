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
    }

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
    
const pepe= document.getElementById("amor");
 pepe.addEventListener('click', ()=>{
 
                let random;
             random= Math.floor(Math.random() * (3 - 1))+ 1;
                if(random==1)
                {
                document.getElementById("resultadoAmor").innerHTML ="Te va a ir bien en el amor <3​";                  
                }
                else
                {
                    document.getElementById("resultadoAmor").innerHTML ="No creemos que te vaya bien en el amor:C";   
                }

         }  )
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*do{
        let opcion;       
        const tierra =["Tauro", "Virgo", "Capricornio"];
        const aire =["Géminis", "Libra", "Acuario"];
        const agua =["Cáncer", "Escorpio", "Piscis"];
        const fuego =["Aries", "Leo", "Sagitario"];
        opcion = prompt('Ingrese el grupo donde identifique su signo: 🧚🏼​🧚🏼‍♀️​\n\n1 -' + tierra + '\n2 -' + aire + '\n3 -' + agua + '\n4 -' + fuego + '\n\n Para salir ingrese el número 5.')
            switch (opcion) {
                case '1':
                alert('Eres un signo de tierra. 🤎​​​');
                    break;
                case '2':
                alert('Eres un signo de aire.🌀​🌀​🌀​');
                    break;
               case '3':
                alert('Eres un signo de agua. 🌊​💧​🌊​');
                    break;
                case '4':
                alert('Eres un signo de fuego. 🔥🔥​🔥​​');
                    break;                       
                case '5':
                alert('bye bye');
                    break;
                default:
                alert('Ingrese una opción válida');
                   break;
                    }
                }while(opcion !='5')
                    })

 const boton= document.getElementById("boton1");
 boton1.addEventListener('click', ()=>{
         opcion= prompt('Para saber su suerte en el amor al alazar ingrese 1')
         let random;
           switch (opcion) {
            case '1':
                random= Math.floor(Math.random() * (3 - 1))+ 1;
                if(random==1)
                {
                    alert('Te va a ir bien en el amor');                  
                }
                else
                {
                alert('No creemos que te vaya bien en el amor:C');   
                }
                break;
            default:
                alert('Ingrese una opción válida')
                break;
         } 
 }) */               

