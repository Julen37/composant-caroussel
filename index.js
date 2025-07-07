const arrayImg = [
    "images/PasseMiroirUn.jpg", 
    "https://m.media-amazon.com/images/I/A1GgTMxoABL.jpg", 
    "https://m.media-amazon.com/images/I/A1dd99QdkWL._UF1000,1000_QL80_.jpg", 
    "https://m.media-amazon.com/images/I/912knWPYiNL.jpg"
];

var imgSection = document.getElementById("imgCaroussel");
var buttonSection = document.getElementById("buttonCaroussel");

imgSection.src = arrayImg[0];


// var clickable = document.getElementById("buttonCaroussel").onclick = function nextImage(){
//     for (i=0 ; i < arrayImg.length ; i++){
//     imgSection.src = arrayImg[i]; // pour mettre la prochaine image dans la src ?
//     // i % 4; //pour que ca se remette a 0 a la fin quand ca arrive a i=4 a verifier si c'est pas 3 vu qu'il y a 4 images mais de l'index de 0 a 3
    
//     }
// }

//je veux prendre l'emplacement de l'image
//pour pouvoir mettre la premiere valeur du tableau
// dans l url de l'image 
// quand on clic sur le bouton
//est ce que ca equivaut a la value de l'index ?

//sachant qu'il faut deja avoir une image d'afficher au depart pour que ca change ensuite