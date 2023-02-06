function tocaSom(e) {
    const elemento = document.querySelector(e);

    if (elemento && elemento.localName === 'audio') {
        console.log(elemento);
        elemento.play()
    } else {
        console.log("elemento não existe");
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla')
// console.log(listaDeTeclas)

for (let som = 0; som < listaDeTeclas.length; som++) {
    const tecla = listaDeTeclas[som];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    // console.log(som);

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
        if (evento.code === "Enter" || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}