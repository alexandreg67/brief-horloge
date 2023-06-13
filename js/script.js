// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {

    const minute = 1000 * 60;
    const hour = minute * 60;
    const time = new Date();

    let secondes = Math.round(time.getTime() / minute*60);
    let minutes = Math.floor(time.getTime() / minute);
    let hours = Math.floor(time.getTime() / hour);

    AIGUILLEHR.style.transform = `rotate(${hours*6}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minutes*6}deg)`;
    AIGUILLESEC.style.transform = `rotate(${secondes*6}deg)`;

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);