/*=========================================
        MENU RESPONSIVE
=========================================*/

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/*=========================================
    CERRAR MENU AL HACER CLICK
=========================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

/*=========================================
        HEADER SCROLL
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});

/*=========================================
        TEXTO ESCRIBIENDO
=========================================*/

const palabras = [

    "Integración de Contenidos Digitales",
    "Diseñadora Multimedia",
    "Desarrolladora Web",
    "Diseñadora Gráfica"

];

let indice = 0;
let letra = 0;
let escribiendo = true;

const texto = document.getElementById("texto");

function typing(){

    if(escribiendo){

        texto.textContent = palabras[indice].substring(0, letra);

        letra++;

        if(letra > palabras[indice].length){

            escribiendo = false;

            setTimeout(typing,1500);

            return;

        }

    }else{

        texto.textContent = palabras[indice].substring(0, letra);

        letra--;

        if(letra < 0){

            escribiendo = true;

            indice++;

            if(indice >= palabras.length){

                indice = 0;

            }

        }

    }

    setTimeout(typing,120);

}

typing();

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function mostrarElementos(){

    const alto = window.innerHeight;

    reveals.forEach(elemento=>{

        const posicion = elemento.getBoundingClientRect().top;

        if(posicion < alto - 120){

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();

/*=========================================
        FADE-UP
=========================================*/

const fadeUp = document.querySelectorAll(".fade-up");

function mostrarFade(){

    fadeUp.forEach(caja=>{

        const posicion = caja.getBoundingClientRect().top;

        if(posicion < window.innerHeight - 120){

            caja.classList.add("active");

        }

    });

}

window.addEventListener("scroll",mostrarFade);

mostrarFade();

/*=========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

const topButton = document.createElement("div");

topButton.className = "top";

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
        BARRAS DE HABILIDADES
=========================================*/

const barras = document.querySelectorAll(".progreso");

const porcentajes = [

    95,
    90,
    85,
    92,
    88,
    80

];

function animarBarras(){

    barras.forEach((barra,index)=>{

        const posicion = barra.getBoundingClientRect().top;

        if(posicion < window.innerHeight-100){

            barra.style.width = porcentajes[index]+"%";

        }

    });

}

window.addEventListener("scroll",animarBarras);

animarBarras();

/*=========================================
        CONTADORES
=========================================*/

const numeros = document.querySelectorAll(".contador");

function contador(){

    numeros.forEach(numero=>{

        const objetivo = +numero.dataset.numero;

        let actual = 0;

        const velocidad = objetivo/100;

        function aumentar(){

            actual += velocidad;

            if(actual < objetivo){

                numero.innerHTML = Math.floor(actual);

                requestAnimationFrame(aumentar);

            }else{

                numero.innerHTML = objetivo;

            }

        }

        aumentar();

    });

}

window.addEventListener("load",contador);

/*=========================================
        PARALLAX HERO
=========================================*/

const hero = document.querySelector(".inicio");

window.addEventListener("scroll",()=>{

    hero.style.backgroundPositionY = window.scrollY*0.4+"px";

});

/*=========================================
        MOVIMIENTO IMAGEN
=========================================*/

const imagen = document.querySelector(".imagen img");

document.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.pageX)/40;

    let y = (window.innerHeight/2 - e.pageY)/40;

    imagen.style.transform =

    `translate(${x}px,${y}px)`;

});

/*=========================================
        TARJETAS
=========================================*/

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.04)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/*=========================================
        SCROLL SUAVE EN EL MENÚ
=========================================*/

document.querySelectorAll('.navbar a').forEach(enlace => {

    enlace.addEventListener('click', function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
        EFECTO RIPPLE BOTONES
=========================================*/

document.querySelectorAll(".btn").forEach(boton=>{

    boton.addEventListener("click",function(e){

        const circulo=document.createElement("span");

        const x=e.clientX-this.offsetLeft;

        const y=e.clientY-this.offsetTop;

        circulo.style.left=x+"px";
        circulo.style.top=y+"px";

        circulo.classList.add("ripple");

        this.appendChild(circulo);

        setTimeout(()=>{

            circulo.remove();

        },600);

    });

});

/*=========================================
        RESALTAR MENÚ ACTIVO
=========================================*/

const secciones = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let actual="";

    secciones.forEach(sec=>{

        const top=window.scrollY;
        const offset=sec.offsetTop-150;
        const alto=sec.offsetHeight;

        if(top>=offset && top<offset+alto){

            actual=sec.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("activo");

        if(link.getAttribute("href")==="#"+actual){

            link.classList.add("activo");

        }

    });

});

/*=========================================
        ANIMACIÓN IMÁGENES
=========================================*/

const proyectos=document.querySelectorAll(".proyecto");

proyectos.forEach(proyecto=>{

    proyecto.addEventListener("mouseenter",()=>{

        proyecto.style.transform="translateY(-10px)";

    });

    proyecto.addEventListener("mouseleave",()=>{

        proyecto.style.transform="translateY(0)";

    });

});

/*=========================================
        CARGA DE LA PÁGINA
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*=========================================
        MENSAJE FORMULARIO
=========================================*/

const formulario=document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Gracias por comunicarte conmigo. Pronto responderé tu mensaje.");

    formulario.reset();

});

}

/*=========================================
        EFECTO CURSOR SOBRE BOTONES
=========================================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});
