var d=document.getElementsByClassName('Rotation');
function playPause() {
    var music = document.getElementById('music2');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused){
        music.play();
        music_btn.src = 'image/pause.png';
        d.style.animationPlayState="running";
    }
    else{
        music.pause();
        music_btn.src = 'image/play.png';
        d.style.animationPlayState="paused";
    }
}
