//Sacar las variables:
// const audio = document.querySelector(".audio");
// const play = document.querySelector(".play");
// const fordward = document.querySelector(".fordward");
// const backward = document.querySelector(".backward");

const audio = document.getElementsByTagName('audio')[0];
const play = document.getElementsByClassName('play')[0];
const fordward = document.getElementsByClassName('fordward')[0];
const backward = document.getElementsByClassName('backward')[0];

//crear array y contador
let songs = ['music1.mp3', 'music2.mp3', 'music3.pm3'];
let currentSong = 0;

//cambiar canción
function loadSong(currentTrack) {
    audio.src = songs[currentTrack];
    audio.load();
    //Faltaria cargar imagen
}

//Pausar o reproducir audio
function checkSong() {
    if (audio.paused) {
        audio.play();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        play.innerHTML = '<i class="fa fa-play"></i>';
    }
}

//Avanzar y retroceder
function goFordward() {
    if (currentSong = 3) {
        currentSong = 0;
    } else {
        currentSong += 1;
    }
    loadSong(currentSong);
    audio.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

function goBackward() {
    if (currentSong = 0) {
        currentSong = 3;
    } else {
        currentSong -= 1;
    }
    loadSong(currentSong);
    audio.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

//Cuando acabe suena la siguente
audio.addEventListener('ended', goFordward);

//botones
play.addEventListener('click', checkSong);
fordward.addEventListener('click', goFordward);
backward.addEventListener('click', goBackward);






