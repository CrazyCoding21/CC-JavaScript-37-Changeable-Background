function randomBg(){
    const images = [
        'url("../images/1.jpeg")',
        'url("../images/2.jpeg")',
        'url("../images/3.jpeg")',
        'url("../images/4.jpeg")',
        'url("../images/5.jpeg")',
    ]

    const container = document.getElementById('bg');
    const bg = images[Math.floor(Math.random() * images.length)];

    container.style.backgroundImage = bg; 

    
}
setInterval(randomBg, 1000);
