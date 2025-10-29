console.log("le fichier est bien chargé");

// Ingrédient 1 : Définir la date de fin en millisecondes 

const decompteDateFinale = new Date("December 25,2025 00:00:01").getTime();

console.log(decompteDateFinale)

// Ingrédient 2 : Créer la fonction qui calcule le temps restant


function decompte()  {

    
    // TODO_01: Récupérer l'heure actuelle
    const maintenant = Date.now();
    
console.log("maintenant : " + maintenant);

        // TODO_02: Calculer le temps restant
        const tempsRestant =decompteDateFinale - maintenant;

        console.log(`temps restant : ${tempsRestant}`);

        // TODO_03: Convertire en jours, heures, minutes, secondes
        const seconde = 1000;
        const minute = seconde * 60;
        const heure = minute * 60 ;
        const jour = heure * 24;

        const j = Math.floor(tempsRestant / jour)
        console.log("j : " + j);
         const h = Math.floor((tempsRestant % jour) / heure)
        console.log("h : " + h);

               const m = Math.floor((tempsRestant % heure) / minute)
        console.log("m : " + m);

             const s = Math.floor((tempsRestant % minute) / seconde)
        console.log("s : " + s);

        // TODO_04: Afficher le resultats dans le html
        document.getElementById("jour").textContent =j;
        document.getElementById("heure").textContent =h;
        document.getElementById("minute").textContent =m;
        document.getElementById("seconde").textContent =s;
        
}


decompte();

let time =setInterval(decompte, 1000)


    


