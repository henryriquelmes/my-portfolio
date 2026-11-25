
// ATUALIZAR ANO DO RODAPÉ

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


// FECHAR MENU AO CLICAR

const linksMenu = document.querySelectorAll(".navbar-nav .nav-link");

const menu = document.getElementById("menu");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        if (menu.classList.contains("show")) {

            const menuBootstrap = bootstrap.Collapse.getOrCreateInstance(menu);

            menuBootstrap.hide();

        }

    });

});


// EFEITO DE DIGITAÇÃO

const texto = document.getElementById("texto-digitando");

const frases = [
    "Estudante de ADS",
    "Desenvolvedor em formação",
    "Apaixonado por tecnologia",
    "Explorando novas tecnologias"
];

let indiceFrase = 0;
let indiceLetra = 0;
let apagando = false;

function digitar() {

    const fraseAtual = frases[indiceFrase];

    if (apagando) {

        texto.textContent = fraseAtual.substring(0, indiceLetra - 1);
        indiceLetra--;

    } else {

        texto.textContent = fraseAtual.substring(0, indiceLetra + 1);
        indiceLetra++;

    }

    let velocidade = apagando ? 45 : 90;

    if (!apagando && indiceLetra === fraseAtual.length) {

        apagando = true;
        velocidade = 1500;

    } else if (apagando && indiceLetra === 0) {

        apagando = false;
        indiceFrase = (indiceFrase + 1) % frases.length;
        velocidade = 400;

    }

    setTimeout(digitar, velocidade);

}

digitar();


// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".titulo-secao, .sobre-conteudo, .skill-card, .project-card, .redes a"
);

elementos.forEach(function(elemento) {

    elemento.classList.add("reveal");

});

const observador = new IntersectionObserver(function(entradas) {

    entradas.forEach(function(entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("ativo");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(function(elemento) {

    observador.observe(elemento);

});

