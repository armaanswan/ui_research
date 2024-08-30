const trackLists = document.querySelectorAll('.tracklist');
const lyricsOverlay = document.querySelector('.lyrics-overlay');
const lyricsPopup = document.querySelector('.lyrics-popup');

trackLists.forEach(trackList => {
    trackList.addEventListener('click', function (e) {
        if (e.target.classList.contains('track'))
            openLyricsPopup();
    });
});

lyricsOverlay.addEventListener('click', function () {
    closeLyricsPopup();
});

function openLyricsPopup() {
    lyricsOverlay.classList.add('visible');
    lyricsPopup.classList.add('visible');
    disableBodyScrolling();
}

function closeLyricsPopup() {
    lyricsOverlay.classList.remove('visible');
    lyricsPopup.classList.remove('visible');
    enableBodyScrolling();
}

function disableBodyScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableBodyScrolling() {
    document.body.style.overflow = '';
}