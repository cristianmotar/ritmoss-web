// contenidoFooter es una constante que almacena en acentos graves el HTML del footer global
const contenidoFooter = `

`;

window.addEventListener("load", function(){
    // A la constante "ancla" se le da ubicación por medio del id="anclaFooter"
    const ancla = document.getElementById("anclaFooter")
    // Asigna el contenido de "contenidoFooter" y devuelve la sintaxis HTML con un "innerHTML a la constante "ancla"
    ancla.innerHTML = contenidoFooter;
});