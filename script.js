var wordsToAdd = "";
var addedWords = '';
var wordIndex = 0;
var lastScrollPosition = 0;
var addingWords = false;
var removingWords = false;
var index = 0;
var index2 = 0;
var test = 0;
var activated_left = false;
var activated_right = false;
var activated = {};
var content_update = 0;
var hauteurEcranComplet;
var placememntPortailUn;

function addWord() {
    if (window.scrollY >= 600){
        var wordsToAdd = [
            ["Découvrez", "un", "monde", "captivant", "où", "la", "science", "rencontre", "l'imagination.", "\n", "\n"],
            ["Bienvenue", "dans", "Portal,", "une", "aventure", "révolutionnaire", "qui", "vous", "plongera", "dans", "un", "univers", "plein", "de", "mystères", "et", "de", "défis", "inattendus.", "\n", "\n"],
            ["Dans", "ce", "jeu", "de", "réflexion", "acclamé", "par", "la", "critique,", "vous", "incarnez", "Chell,", "une", "héroïne", "confrontée", "à", "des", "énigmes", "complexes", "et", "à", "un", "environnement", "hostile.", "\n", "\n"],
            ["Équipée", "du", "Portal", "Gun,", "une", "arme", "innovante", "capable", "de", "créer", "des", "portails", "dimensionnels,", "vous", "devez", "naviguer", "à", "travers", "les", "salles", "de", "test", "tortueuses", "de", "l'Aperture", "Science", "Enrichment", "Center.", "\n", "\n"],
            ["Chaque", "défi", "mettra", "vos", "capacités", "de", "résolution", "de", "problèmes", "à", "l'épreuve,", "vous", "obligeant", "à", "repousser", "les", "limites", "de", "votre", "ingéniosité.", "\n", "\n"],
            ["Explorez", "les", "mystères", "du", "monde", "virtuel", "avec", "Portal", "et", "plongez", "dans", "une", "aventure", "dont", "vous", "ne", "ressortirez", "pas", "indemne.", "\n", "\n"],
            ["Testez", "vos", "réflexes", "et", "votre", "esprit", "avec", "les", "énigmes", "les", "plus", "complexes", "jamais", "conçues.", "\n", "\n"],
            ["Découvrez", "les", "secrets", "de", "l'Aperture", "Science", "Enrichment", "Center", "et", "dévoilez", "les", "mystères", "qui", "se", "cachent", "dans", "ses", "profondeurs.", "\n", "\n"],
            ["Affrontez", "des", "dangers", "inconnus", "et", "dévoilez", "les", "vérités", "qui", "se", "trouvent", "au", "cœur", "du", "monde", "virtuel", "de", "Portal.", "\n", "\n"],
            ["Prenez", "le", "contrôle", "de", "votre", "destinée", "et", "découvrez", "votre", "véritable", "potentiel", "dans", "un", "voyage", "qui", "changera", "votre", "vie", "à", "jamais.", "\n", "\n"],
        ];
    }

    if (window.scrollY >= 3000){
        var wordsToAdd = [
            ["Plongez", "dans", "un", "monde", "où", "la", "science", "rencontre", "l'humour", "et", "où", "la", "logique", "défie", "la", "gravité.", "\n","\n"],
            ["Bienvenue", "dans", "Portal", "2,", "le", "jeu", "de", "réflexion", "et", "de", "puzzle", "qui", "va", "mettre", "votre", "cerveau", "à", "l'épreuve", "tout", "en", "vous", "faisant", "rire", "à", "gorge", "déployée.", "\n","\n"],
            ["Explorez", "des", "environnements", "innovants,", "des", "salles", "de", "test", "futuristes", "et", "des", "chambres", "secrètes,", "le", "tout", "avec", "une", "narration", "captivante", "qui", "vous", "emmènera", "dans", "une", "aventure", "épique.", "\n","\n"],
            ["Testez", "vos", "compétences", "avec", "une", "variété", "de", "défis", "ingénieux.", "Faites", "preuve", "d'ingéniosité", "pour", "utiliser", "le", "portail", "de", "manière", "stratégique", "et", "résoudre", "des", "casse-têtes", "qui", "défient", "l'imagination.", "\n","\n"],
            ["Défiez", "vos", "amis", "dans", "un", "mode", "multijoueur", "innovant", "où", "la", "coopération", "est", "la", "clé.", "Travailler", "ensemble", "pour", "résoudre", "des", "énigmes", "complexes", "et", "découvrir", "de", "nouveaux", "niveaux", "excitants.", "\n","\n"],
            ["Rencontrez", "GLaDOS,", "l'intelligence", "artificielle", "emblématique,", "ainsi", "que", "d'autres", "personnages", "mémorables", "qui", "apportent", "une", "touche", "d'humour", "et", "d'émotion", "à", "chaque", "instant.", "\n","\n"],
            ["Plongez", "dans", "l'ambiance", "immersive", "de", "Portal", "2", "avec", "une", "bande-son", "originale", "qui", "vous", "transporte", "dans", "un", "univers", "où", "la", "science", "et", "la", "technologie", "se", "rencontrent.", "\n","\n"],
            ["Explorez", "des", "lieux", "fascinants,", "des", "laboratoires", "souterrains", "aux", "salles", "de", "test", "en", "apesanteur,", "tous", "superbement", "conçus", "pour", "offrir", "une", "expérience", "visuelle", "saisissante.", "\n","\n"],
            ["Portal", "2", "a", "reçu", "l'acclamation", "de", "la", "critique", "et", "des", "joueurs", "du", "monde", "entier,", "salué", "pour", "son", "gameplay", "innovant,", "son", "humour", "intelligent", "et", "son", "histoire", "captivante.", "\n","\n"],
            ["Avec", "un", "contenu", "riche", "et", "des", "défis", "supplémentaires", "à", "débloquer,", "Portal", "2", "offre", "une", "expérience", "de", "jeu", "qui", "vous", "gardera", "accroché", "pendant", "des", "heures,", "avec", "toujours", "plus", "à", "découvrir.", "\n","\n"],
        ]
    }
    



    if (wordIndex < wordsToAdd.length) {
        var hauteurEcran = window.innerHeight;
        var largeurEcran = window.innerWidth;
        if (addedWords.length == 0){
            index = 0;
            index2 = 0;
        }
        if(largeurEcran >= 1600){
            placememntPortailUn = 1800;
        }
        if(largeurEcran >= 1200){
            placememntPortailUn = 2000;
        }
        if(largeurEcran >= 900){
            placememntPortailUn = 1400;
        }
        if(largeurEcran >= 700){
            placememntPortailUn = 1300;
        }
        if(largeurEcran >= 400){
            placememntPortailUn = 2400;
        }
        console.log("Largeur de lecrant " +largeurEcran);
        console.log("hauteur de lecrant " +hauteurEcran);
        console.log(window.scrollY);

        addedWords += wordsToAdd[index2][index] + " ";
        if (window.scrollY >= 600){
            
            document.getElementById('text').textContent = addedWords;
        }
        if (window.scrollY >= 1700){
            document.getElementById('text2').textContent = addedWords;
        }
        
        index++;
        wordIndex++;
        addedWords = removeWordsBeforeSecondNewLine(addedWords);
        setTimeout(addWord, 70); 
    } else {
        addingWords = false;
    }

    if (index >= wordsToAdd[index2].length){
        index2++;
        index = 0;

        document.getElementById('text').textContent = addedWords;
    }

    if(index2 == 2){
        if (largeurEcran > 800){
           setTimeout(ajouterImageSuperposee("core_gauche","Image/Portal2cover.jpg"), 5000); 
        }
        
    }

    if(index2 == 6){
        if (largeurEcran > 800){
            setTimeout(ajouterImageSuperposee("core_droite","Image/portal_1.jfif"), 5000);
        }
        
    }

    if(index2 >= wordsToAdd.length){
        setTimeout(removeWord, 3000);
        removingWords =true;

        if(content_update == 0){
            document.getElementById("next-content").classList.remove("d-none");
        }
        if(content_update == 1){
            document.getElementById("next-content-two").classList.remove("d-none");
        }

        index = 0;
        index2 = 0;
        content_update++;
    }
    
}

function removeWord() {
    if (addedWords.length > 0) {
        addedWords = addedWords.slice(0, -1);
        if(content_update == 0){
            document.getElementById('text').textContent = addedWords;
        }
        if(content_update == 1){
            document.getElementById('text2').textContent = addedWords;
        }
        
        setTimeout(removeWord, 10); 
    } else {
        removingWords = false;
    }
}

function removeFirstWord(inputString) {
    var firstSpaceIndex = inputString.indexOf(' ');
    var firstWord = inputString.slice(0, firstSpaceIndex);
    var updatedString = inputString.slice(firstSpaceIndex + 1);
    return [firstWord, updatedString];
}

function removeWordsBeforeSecondNewLine(inputString) {
    var firstNewLineIndex = inputString.indexOf(' \n \n');
    var secondNewLineIndex = inputString.indexOf(' \n \n', firstNewLineIndex + 1);

    if (secondNewLineIndex !== -1) {
        return inputString.substring(firstNewLineIndex + 1);
    } else {
        return inputString;
    }
}



function ajouterImageSuperposee(idImage, image) {
    if (!activated[idImage]) {
        var img2 = document.createElement("img");
        img2.src = image;
        img2.alt = "Deuxième image";
        img2.classList.add("holograme");
        var parent = document.getElementById(idImage).parentNode;
        parent.appendChild(img2);

        setTimeout(function() {
            img2.style.display = "none";
            activated[idImage] = false; 
        }, 5000); 
        activated[idImage] = true;
        if (idImage == "core_gauche") {
            img2.style.right = "-150px";
        } else if (idImage == "core_droite") {
            img2.style.left = "-150px";
        }
    }
}



var lastScrollEvent = 0;

window.addEventListener('wheel', function(event) {
    var now = new Date().getTime();
    var deltaTime = now - lastScrollEvent;
    
 
    if (deltaTime > 0) { 
        lastScrollEvent = now; 
        
        if (event.deltaY > 0 && !addingWords && !removingWords) {
            addingWords = true;
            wordIndex = 0;
            addWord();
        } else if (event.deltaY < 0 && !addingWords && !removingWords) {
            removingWords = true;
            removeWord();
        }
    }
});

document.getElementById('color-inverter').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    var element = document.getElementById('main');
    // Basculer la classe 'inversed-background' sur 'main'
    if (element.classList.contains('inversed-background')) {
        element.classList.remove('inversed-background');
    } else {
        element.classList.add('inversed-background'); 
    }

  
    document.querySelectorAll('.inversed').forEach(function(element) {
        if (!element.classList.contains('colorInverter')) {
            element.classList.add('colorInverter');
        } else {
            element.classList.remove('colorInverter');
        }
    });
});






function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}


function displayElapsedTime() {
    var startTime = localStorage.getItem("startTime");
    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem("startTime", startTime);
    }

    var currentTime = Date.now();
    var elapsedTime = Math.floor((currentTime - startTime) / 1000); 
    console.log("Temps écoulé sur le site : " + elapsedTime + " secondes");
}


setInterval(displayElapsedTime, 5000);


displayElapsedTime();

