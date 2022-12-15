//total number of images
let img = document.querySelectorAll('.labor-artworks figure');
let imgNum = img.length;

//random number between 1 and the total number of images
let rndInt = Math.floor(Math.random() * (imgNum - 1 + 1));

//show random image on load
function displayImage(){
    img[rndInt].style.display="flex";
}
setInterval(displayImage, 1);

//on scroll, reload and reshuffle
let x = 0;
function shuffleOnScroll() {
    let scrollDistance = x+= 1;
    if (scrollDistance % 50 == 0){
        // $( "#labor-artworks figure" ).load(window.location.href + " #labor-artworks figure" );
        // img[Math.floor(Math.random() * (imgNum - 1 + 1))].style.display="flex";
        location.reload();
        // for (var i = 0; i < img.length; i++) {
        //     img[i].style.display="none";
        // }
        // img[Math.floor(Math.random() * (imgNum - 1 + 1))].style.display="flex";
    }
    console.log("scroll distance:" + scrollDistance);
}


// let textHighlight = document.querySelectorAll('.reddit-posts .headline span');

// document.getElementById("labor-artworks").onmouseenter = function() {
//     for (var i = 0; i < img.length; i++) {
//         textHighlight[i].style.webkitTextStrokeWidth = "0px";
//         // textHighlight[i].style.color = "black";
//     }
// };

// document.getElementById("labor-artworks").onmouseleave = function() {
//     for (var i = 0; i < img.length; i++) {
//         textHighlight[i].style.webkitTextStrokeWidth = "8px";
//         // textHighlight[i].style.color = "white";
//     }
// };

console.log(rndInt);
console.log(imgNum);