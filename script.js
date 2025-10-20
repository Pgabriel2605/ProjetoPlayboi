const openBtn= document.getElementsByClassName('btn')[0];
const closeBtn= document.getElementsByClassName('close')[0];
const miniPlayer=document.getElementById('miniPlayer');
const ytPlayer = document.getElementById('ytPlayer');

openBtn.addEventListener('click', () => {
    ytPlayer.src=`https://www.youtube.com/embed/GRoa6w-wnT4?si=iO8IABfpT2VApaUi&autoplay=1&t=${new Date().getTime()}`;
    miniPlayer.classList.add('show');


});


closeBtn.addEventListener('click', () => {
    ytPlayer.src = "";
    miniPlayer.classList.remove('show');

});