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
    
    let time = new Date();
    const minute = 1000 * 60;
    const getMinutes = time.getMinutes()

    let secondes = Math.round(time.getTime() / minute*60);
    let minutes = Math.floor(time.getTime() / minute);
    let hours = time.getHours();

    AIGUILLEHR.style.transform = `rotate(${(hours*30)+(getMinutes/2)}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minutes*6}deg)`;
    AIGUILLESEC.style.transform = `rotate(${secondes*6}deg)`;

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);