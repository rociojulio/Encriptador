// Obtener referencias a los elementos del DOM
let botonEncriptar = document.querySelector("#boton-encriptar");
let botonDesencriptar = document.querySelector("#boton-desencriptar");
let inputTexto = document.querySelector("textarea");
let parrafoAside = document.querySelector("aside");

// Función de encriptado
function encriptar(mensaje) {
  let mensajeEncriptado = "";
  for (const element of mensaje) {
    let caracter = element;
    if (caracter >= "a" && caracter <= "z") {
      let indice = (caracter.charCodeAt(0) - 97 + 10) % 26; // Obtener el índice en el rango de 0 a 25
      let caracterEncriptado = String.fromCharCode(indice + 97); // Convertir el índice a código ASCII y obtener el caracter encriptado
      mensajeEncriptado += caracterEncriptado;
    } else {
      mensajeEncriptado += caracter; // Mantener los caracteres no encriptados
    }
  }
  return mensajeEncriptado;
}

// Función de desencriptado
function desencriptar(mensajeEncriptado) {
  let mensajeDesencriptado = "";
  for (const element of mensajeEncriptado) {
    let caracter = element;
    if (caracter >= "a" && caracter <= "z") {
      let indice = (caracter.charCodeAt(0) - 97 - 10 + 26) % 26; // Obtener el índice en el rango de 0 a 25
      let caracterDesencriptado = String.fromCharCode(indice + 97); // Convertir el índice a código ASCII y obtener el caracter desencriptado
      mensajeDesencriptado += caracterDesencriptado;
    } else {
      mensajeDesencriptado += caracter; // Mantener los caracteres no encriptados
    }
  }
  return mensajeDesencriptado;
}

// Manejador de evento para el botón de encriptar
botonEncriptar.addEventListener("click", () => {
  let mensaje = inputTexto.value;
  let mensajeEncriptado = encriptar(mensaje);
  parrafoAside.innerHTML = `<p>${mensajeEncriptado}</p>
                            <button id="boton-copiar">Copiar</button>`;

  let botonCopiar = document.querySelector("#boton-copiar");
  botonCopiar.addEventListener("click", () => {
    copiarTexto(mensajeEncriptado);
  });
});

// Manejador de evento para el botón de desencriptar
botonDesencriptar.addEventListener("click", () => {
  let mensajeEncriptado = parrafoAside.textContent.trim();
  let mensajeDesencriptado = desencriptar(mensajeEncriptado);
  inputTexto.value = mensajeDesencriptado;
});

// Función para copiar texto al portapapeles
function copiarTexto(texto) {
  let elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  elementoTemporal.setAttribute("readonly", "");
  elementoTemporal.style.position = "fixed";
  elementoTemporal.style.opacity = 0;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.focus();
  elementoTemporal.select();
  document.execCommand("copy");
  document.body.removeChild}
