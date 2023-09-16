const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijera = document.getElementById('btn-tijera');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

const imagenes = [
    {
        name: "Piedra",
        url: "elementos/Piedra.png" 
    },
    {
        name: "Papel",
        url: "elementos/Papel.png" 
    },
    {
        name: "Tijera",
        url: "elementos/Tijera.png" 
    }
];


function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijera.addEventListener('click', function(){
    opcionJugador = "Tijera";
    opPc();
})


function opPc(){
    var random = numeroAleatorio();

    if(random == 0){
        opcionPc = "Piedra";
    }else if(random == 1){
        opcionPc = "Papel";
    }else if(random == 2){
        opcionPc = "Tijera"
    };

    batalla();

};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijera"){
        msjBatalla.innerHTML = "!Ganaste! :D";
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "!Ganaste! :D";
    }else if(opcionJugador == "Tijera" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "!Ganaste! :D";
    }else{
        msjBatalla.innerHTML = "Perdiste ;(";
    };

    addImagenes();
}

function numeroAleatorio(){
    let numero = Math.floor(Math.random() * 3);
    return numero;
}

function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';

};


window.addEventListener('load', iniciar);