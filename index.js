const arrayImg = [
    "images/PasseMiroirUn.jpg", 
    "images/PasseMiroirDeux.jpg", 
    "images/PasseMiroirTrois.jpg", 
    "images/PasseMiroirQuatre.jpg"
];

var imgSection = document.getElementById("imgCaroussel");
var btnSection = document.getElementById("btnCaroussel");

imgSection.src = arrayImg[0]; //mettre la source de l'image le premier index de base du tableau pour quelle s'affiche en premier

var clickable = document.getElementById("btnCaroussel").onclick = function(){
    for (i=0 ; i < arrayImg.length ; i++){
        imgSection.src = arrayImg[i]; // pour mettre la prochaine image dans la src 
    // i % 4; //pour que ca se remette a 0 a la fin quand ca arrive a i=4 a verifier si c'est pas 3 vu qu'il y a 4 images mais de l'index de 0 a 3
    };
};

//je veux prendre l'emplacement de l'image
//pour pouvoir mettre la premiere valeur du tableau
// dans l url de l'image 
// quand on clic sur le bouton