// contenidoFooter es una constante que almacena en acentos graves el HTML del footer global
const contenidoFooter = `<!--Footer-->
<footer class="pie-pagina">

    <div class="grupo-1">
        <div class="box">
            <figure>
                <a href="#">
                    <img class="logo" src="../img/logo1.png" alt="logo">
                </a>
            </figure>
        </div>
        <div class="box">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, corporis.</p>
        </div>
        <div class="box">
            <h2>Follow Us</h2>
            <div class="red-social">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-facebook"></a>
            </div>
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy; 2022 <b>ritmosss</b> - Todos los Derechos Reservados.</small>
    </div>

</footer>

`;

window.addEventListener("load", function(){
    // A la constante "ancla" se le da ubicación por medio del id="anclaFooter"
    const ancla = document.getElementById("anclaFooter")
    // Asigna el contenido de "contenidoFooter" y devuelve la sintaxis HTML con un "innerHTML a la constante "ancla"
    ancla.innerHTML = contenidoFooter;
});