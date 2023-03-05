function toggleNav() {
    var icon =document.getElementById('icon');
    var nav = document.getElementById('nav');
    var curtain = document.getElementById('curtain');
    var content = document.getElementById('content');
    
    icon.classList.toggle('open');
    nav.classList.toggle('show');
    curtain.classList.toggle('slide');
    content.classList.toggle('transparent');
}