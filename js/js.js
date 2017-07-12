function playPause() {
    var music = document.getElementById('music2');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused){
        music.play();
        music_btn.src = 'image/pause.png';
    }
    else{
        music.pause();
        music_btn.src = 'image/play.png';
    }
}

window.onload = function () {
    var btn=document.getElementById('music_btn2');
    btn.addEventListener('click', setAnimation, false);
};
function setAnimation() {
    var playstate;
    var am=document.getElementById('Rotation');
    am.style.WebkitAnimationPlayState == 'running' ? playstate='paused': playstate= 'running';
    am.style.WebkitAnimationPlayState = playstate;
}