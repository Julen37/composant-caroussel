const arrayImg = [
    "images/PasseMiroirUn.jpg", 
    "images/PasseMiroirDeux.jpg", 
    "images/PasseMiroirTrois.jpg", 
    "images/PasseMiroirQuatre.jpg"
];

let imgSection = document.getElementById("imgCaroussel");
let btnSection = document.getElementById("btnCaroussel");

index = 0;
imgSection.src = arrayImg[index]; //mettre la source de l'image le premier index de base du tableau pour quelle s'affiche en premier

btnSection.onclick = function(){
    imgSection.src = arrayImg[index + 1] ;
    return index += 1; // pour mettre la prochaine image dans la src 
        //  % arrayImg.length; //pour que ca se remette a 0 a la fin quand ca arrive a la longueur du tableau
    
};

//je veux prendre l'emplacement de l'image
//pour pouvoir mettre la premiere valeur du tableau
// dans l url de l'image 
// quand on clic sur le bouton