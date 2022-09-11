function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

   //console.log(instrumento);

    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);


    tecla.onkeydown = function (evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
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