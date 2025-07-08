const arrayImg = [
    "images/PasseMiroirUn.jpg", 
    "images/PasseMiroirDeux.jpg", 
    "images/PasseMiroirTrois.jpg", 
    "images/PasseMiroirQuatre.jpg"
];

let imgSection = document.getElementById("imgCaroussel");
let btnSection = document.getElementById("btnCaroussel");

let index = 0;
imgSection.src = arrayImg[index]; //mettre la source de l'image le premier index de base du tableau pour quelle s'affiche en premier

btnSection.onclick = function(){
    index = (index + 1) % arrayImg.length; //modulo de la longueur du tableau pour que ca se remette a 0 a la fin quand ca arrive a la longueur du tableau
    setTimeout(() => { //defini un minuteur sur le code dedans
        imgSection.src = arrayImg[index]; // Change la source de l'image
    }, 200); // le temps que ca prend pour passer d'une image a une autre
    // ca met un temps de 200 avant que ca change la source
};

//je veux prendre l'emplacement de l'image
//pour pouvoir mettre la premiere valeur du tableau
// dans l url de l'image 
// quand on clic sur le bouton
// et affiche les prochaine des qu'on appui

//ameliorer pour mettre un bouton en plus pour envoyer au livre precedent