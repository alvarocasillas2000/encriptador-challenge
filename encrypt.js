// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(texto) {
    let mensaje = document.getElementById("mensaje").value;
    console.log('mensaje:', mensaje);

    if(conMayus(mensaje)) {
        limpiarCajas();
        return asignarTextoElemento("#presentacionTextoResultado", `El mensaje no debe contener caracteres especiales o mayusculas: <br>${ mensaje }`);
    
    }else {
        
        let caracteres = mensaje.split("");
        console.log(caracteres);

        for(let i = 0; i < caracteres.length; i++) {
            if(caracteres[i] === 'e') {
                caracteres[i] = 'enter';
            }
            if(caracteres[i] === 'i') {
                caracteres[i] = 'imes';
            }
            if(caracteres[i] === 'a') {
                caracteres[i] = 'ai';
            }
            if(caracteres[i] === 'o') {
                caracteres[i] = 'ober';
            }
            if(caracteres[i] === 'u') {
                caracteres[i] = 'ufat';
            }

            mensaje = caracteres.join("");
        }
        limpiarCajas();
        return asignarTextoElemento("#presentacionTextoResultado", mensaje);
    }  
}

function desencriptar(texto) {
    let mensaje = document.getElementById("mensaje").value;
    
    if(conMayus(mensaje)) {
        limpiarCajas();
        return asignarTextoElemento("#presentacionTextoResultado", `El mensaje no debe contener caracteres especiales o mayusculas: <br>${ mensaje }`);
    
    }else {
        let caracteres = mensaje.split(""); 
        let start = 0;
        let end = caracteres.length;
    
        while(start < end) {
            console.log('start:', start);
            console.log('end:', end);

            if(caracteres[start] === 'e') {
                
                for(let i = 0; i < end; i++) {

                    if(caracteres[i] === 'e' && caracteres[i + 1] === 'n' && caracteres[i + 2] === 't' && caracteres[i + 3] === 'e' && caracteres[i + 4] === 'r') {
                        let palabraEnter = caracteres[i] + caracteres[i + 1] + caracteres[i + 2] + caracteres[i + 3] + caracteres[i + 4];
                        console.log('palabraEnter:', palabraEnter);
                        caracteres[i] = 'e';
                        caracteres.splice(i + 1, 4);
                        console.log('desencriptada:', caracteres);
                        i = 4;
                        end -= i;     
                    }
                }
                
            }
            if(caracteres[start] === 'i') {
                for(let i = 0; i < end; i++) {
                    if(caracteres[i] === 'i' && caracteres[i + 1] === 'm' && caracteres[i + 2] === 'e' && caracteres[i + 3] === 's') {
                        let palabraImes = caracteres[i] + caracteres[i + 1] + caracteres[i + 2] + caracteres[i + 3];
                        console.log('palabraImes:', palabraImes);
                        caracteres[i] = 'i';
                        caracteres.splice(i + 1, 3);
                        console.log('desencriptada:', caracteres);
                        i = 3;
                        end -= i;
                    }
                }
                
            }
            if(caracteres[start] === 'a') {
                for(let i = 0; i < end; i++) {
                    if(caracteres[i] === 'a' && caracteres[i + 1] === 'i') {
                        let palabraAi = caracteres[i] + caracteres[i + 1];
                        console.log('palabraAi:', palabraAi);
                        caracteres[i] = 'a';
                        caracteres.splice(i + 1, 1);
                        console.log('desencriptada:', caracteres);
                        i = 1;
                        end -= i;
                    }
                }
                
            }
            if(caracteres[start] === 'o') {
                for(let i = 0; i < end; i++) {
                    if(caracteres[i] === 'o' && caracteres[i + 1] === 'b' && caracteres[i + 2] === 'e' && caracteres[i + 3] === 'r') {
                        let palabraOber = caracteres[i] + caracteres[i + 1] + caracteres[i + 2] + caracteres[i + 3];
                        console.log('palabraOber:', palabraOber);
                        caracteres[i] = 'o';
                        caracteres.splice(i + 1, 3);
                        console.log('desencriptada:', caracteres);
                        i = 3;
                        end -= i;
                    }
                }
            }
            if(caracteres[start] === 'u') {
                for(let i = 0; i < end; i++) {
                    if(caracteres[i] === 'u' && caracteres[i + 1] === 'f' && caracteres[i + 2] === 'a' && caracteres[i + 3] === 't') {
                        let palabraUfat = caracteres[i] + caracteres[i + 1] + caracteres[i + 2] + caracteres[i + 3];
                        console.log('palabraUfat:', palabraUfat);
                        caracteres[i] = 'u';
                        caracteres.splice(i + 1, 3);
                        console.log('desencriptada:', caracteres);
                        i = 3;
                        end -= i;
                    }
                }
            }
            mensaje = caracteres.join("");
            start++;
        }
    }

    limpiarCajas();

    return asignarTextoElemento("#presentacionTextoResultado", mensaje);
}

function validarTexto(mensaje) {
    if(mensaje !== mensaje.toLowerCase()) { // Si el mensaje no esta en minusculas
        limpiarCajas();
        return asignarTextoElemento("#presentacionTextoResultado", "El mensaje debe estar en minusculas");
    }
}

function conMayus(cadena) {
    // Expresión regular para verificar letras mayúsculas o caracteres especiales
    const regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;

    // Testea si la cadena coincide con la expresión regular
    return regex.test(cadena);
}


function limpiarCajas(){
    document.getElementById("condicionesIniciales").style.visibility = "visible"; //Boton de limpiar activado
    document.getElementById("copiar").style.visibility = "visible"; // Boton de copiar activado
    document.getElementById("mensaje").value = ""; // Textarea se limpia
    document.getElementById("presentacionImagen").style.display = "none"; // Imagen de presentacion se oculta
    document.getElementById("presentacionTexto").style.display = "none"; // Texto de presentacion se oculta
    document.getElementById("presentacionTextoIngresa").style.display = "none"; // Texto de presentacion se oculta
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() { //Boton de limpiar
    document.getElementById("condicionesIniciales").style.visibility = "hidden"; // Oculta el boton de limpiar
    document.getElementById("copiar").style.visibility = "hidden"; // Oculta el boton de copiar
    document.getElementById("presentacionImagen").style.display = "block"; // Muestra la imagen de presentacion
    document.getElementById("presentacionTexto").style.display = "block"; // Muestra el texto de presentacion
    document.getElementById("presentacionTextoIngresa").style.display = "block"; // Muestra el texto de presentacion
    asignarTextoElemento("#presentacionTextoResultado", ""); // Limpia el texto de resultado encriptado/desencriptado
    return;
}

function copiar() {
    let texto = document.getElementById("presentacionTextoResultado").innerText;
    return navigator.clipboard.readText().then(
        (clipText) => (document.querySelector(texto).innerText += clipText),
        (err) => console.error("Failed to read clipboard contents: ", err),);
}