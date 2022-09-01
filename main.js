function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_pom');
    }



    contador = contador + 1;

    console.log(contador);
}

















//listaDeTeclas[0].onclick = tocaSomPom;



/*
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}


function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;


function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;


 */