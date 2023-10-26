function validar() {
    /*capturar os valores digitados nos campos*/
    var usuario = document.querySelector("input#usuario").value;
    var senha = document.querySelector("input#senha").value;

    if (usuario == "admin" && senha == "uninove") {
        /*se o usuario digitar for admin e senha digitada for uninove*/
        location.href = "https://www.uninove.br/";
    } else {
        alert('Usuario ou senha invalida');
    }

}


//function lembrar() {

    //var elm = document.querySelector("main");

    /*document.querySelector("main").style.backgroundImage = "url('fundo.jpg')";*/
    /* essa maneira tambem da o mesmo resultado que o elm.*/
    /*alert('usuario: admin senha: uninove');*/
    /*document.getElementById("principal").innerHTML = "<b>Usuario:</b> admin <br> <b>Senha:</b> uninove";*/
   // elm.innerHTML = "<b>Usuario:</b> admin <br> <b>Senha:</b> uninove";
   // elm.style.backgroundImage = "url('fundo2.jpg')";
   // elm.classList.add("lembrar");

//}

function basquete() {
    var elm = document.querySelector("main")
    elm.innerHTML = "<div> <h1>Historia do Basquete</h1><br> <iframe width= '560' height='315' src='https://www.youtube.com/embed/T7_q5bwtLuU?si=BwFWrnaejdQPy3Ke' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> </p> </div>";
   // elm.classList.add("teste");
   elm.style.backgroundImage = "url('fundo2.jpg')";
    // div esta dentro do man
   // var caixa = document.querySelector("div");
   // caixa.style.backgroundColor = "rgba(255,255,255,0.3)";
    elm.style.display = "block";
    elm.style.color = "black"
   // elm.classList.add("testi");
}

function Futebol() {
    var elm = document.querySelector("main")
    elm.innerHTML = "<div><h1>Historia do Futebol</h1><br> <iframe width='560' height='315' src='https://www.youtube.com/embed/tNzHm549-6w?si=pL5kou7PRfGdxjAD' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe> </p> </div>";
    elm.style.backgroundImage = "url('fundo1.jpg')";
    elm.style.color = "white";
   

}



function Esgrima() {
    var elm = document.querySelector("main")
    elm.innerHTML = "<div><h1>Historia do Esgrima</h1><br><iframe width='560' height='315' src='https://www.youtube.com/embed/iiFjal_P-pA?si=8Sqes6gBThrA9200' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></p></div>";
    elm.style.backgroundImage = "url('fundo3.jpg')";
    elm.style.color = "white";

}


function CursosTI() {
    var elm = document.querySelector("main")
    elm.innerHTML = "<div><h1>Curso de T.I</h1><br><iframe width='560' height='315' src='https://www.youtube.com/embed/vkFNqsrjY2E?si=--PX6Kw6K0buNToj' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe></p></div>";
    elm.style.backgroundImage = "url('fundo4.jpg')";
    elm.style.color = "white";

}
//function alternar() {
    //mudar o fundo da pagina para preto
    //mudar a imagem do botão para lua
   // var bd = document.querySelector("body");
   // if (bd.style.backgroundColor == "black") {
       // bd.style.backgroundColor = "white";
       // document.querySelector("button").innerHTML = "&#9788";
    //} else { // else significa se o fundo esta preto
       // bd.style.backgroundColor = "black";
       // document.querySelector("button").innerHTML = "&#9789";
    //}

//}

