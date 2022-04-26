// contenidoNavBar es una constante que almacena en acentos graves el HTML del footer global
const contenidoNavBar = `

<!--navBar-->
<header>
      <img class="logo" src="../img/logo1.png" alt="logo">
        <nav>
            <ul class="nav_links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        <a class="cta" href="#"><button>Contácto</button></a>
    </header>
`;

window.addEventListener("load", function(){
    // A la constante "ancla" se le da ubicación por medio del id="anclaNavBar"
    const ancla = document.getElementById("anclaNavBar")
    // Asigna el contenido de "contenidoNavBar" y devuelve la sintaxis HTML con un "innerHTML a la constante "ancla"
    ancla.innerHTML = contenidoNavBar;
});