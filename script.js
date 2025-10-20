function abrirPlayer(){
    const player= document.getElementById('miniPlayer');
    const iframe= document.getElementById('ytPlayer');
iframe.src = "https://www.youtube.com/embed/YG3EhWlBaoI?si=OYxDYaroaKWANeh1";

    player.style.display='block';


}

function fecharPlayer(){
    const player = document.getElementById('miniPlayer');
    const iframe = document.getElementById('ytPlayer');

    iframe.src="";
    player.style.display='none';
}


