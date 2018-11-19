window.addEventListener('keydown', event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const note = document.querySelector(`.note[data-key="${event.keyCode}"]`);

    note.classList.add('keyhover');

    setTimeout(function () {
        note.classList.remove('keyhover');
    }, 900);

    audio.currentTime = 0;
    audio.play();
});

window.addEventListener('touchstart', event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const note = document.querySelector(`.note[data-key="${event.keyCode}"]`);

    note.classList.add('keyhover');

    setTimeout(function () {
        note.classList.remove('keyhover');
    }, 900);

    audio.currentTime = 0;
    audio.play();
})
