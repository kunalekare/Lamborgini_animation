var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;

document.addEventListener('click', function handleFirstClick() {
    audio.play(); // Play background music
    document.removeEventListener('click', handleFirstClick); // Play only once
});