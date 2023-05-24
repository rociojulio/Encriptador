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
      let indice = (caracter.charCodeAt(0) - 97 + 10) % 26; 
      let caracterEncriptado = String.fromCharCode(indice + 97); 
      mensajeEncriptado += caracterEncriptado;
    } else {
      mensajeEncriptado += caracter; 
    }
  }
  return mensajeEncriptado;
}

function desencriptar(mensajeEncriptado) {
  let mensajeDesencriptado = "";
  for (const element of mensajeEncriptado) {
    let caracter = element;
    if (caracter >= "a" && caracter <= "z") {
      let indice = (caracter.charCodeAt(0) - 97 - 10 + 26) % 26; 
      let caracterDesencriptado = String.fromCharCode(indice + 97); 
      mensajeDesencriptado += caracterDesencriptado;
    } else {
      mensajeDesencriptado += caracter; 
    }
  }
  return mensajeDesencriptado;
}

botonEncriptar.addEventListener("click", () => {
  let mensaje = inputTexto.value;
  let mensajeEncriptado = encriptar(mensaje);
  parrafoAside.innerHTML = `<p>${mensajeEncriptado}</p>
                            <button id="boton-copiar-encriptado">Copiar</button>`;

  let botonCopiarEncriptado = document.querySelector("#boton-copiar-encriptado");
  botonCopiarEncriptado.addEventListener("click", () => {
    copiarTexto(mensajeEncriptado);
  });
});

botonDesencriptar.addEventListener("click", () => {
  let mensajeEncriptado = inputTexto.value;
  let mensajeDesencriptado = desencriptar(mensajeEncriptado);
  parrafoAside.innerHTML = `<p>${mensajeDesencriptado}</p>
                            <button id="boton-copiar-desencriptado">Copiar</button>`;

  let botonCopiarDesencriptado = document.querySelector("#boton-copiar-desencriptado");
  botonCopiarDesencriptado.addEventListener("click", () => {
    copiarTexto(mensajeDesencriptado);
  });
});

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
  document.body.removeChild(elementoTemporal);
}
