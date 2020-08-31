document.body.onkeydown = (event) => {
    //adding 'playing' class on key down
    let keyDown = Array.from(document.querySelectorAll('.key')).find(key => key.dataset.key === event.keyCode.toString());
    if (keyDown) {
        keyDown.classList.add('playing');
    }
    //playing suitable audio on key down
    let audio = Array.from(document.querySelectorAll('audio')).find(audio => audio.dataset.key === event.keyCode.toString());
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}
// removing 'playing' class after finishing transition
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    })
})