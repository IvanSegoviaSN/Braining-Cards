const arrayCards = [];

function createCard(i) {
    arrayCards.push('<div onclick="cardCheck(this)" name="cardID" id="cardID_' + i + '" class="col-2"></div>');
}

/* Efecto de carga en las cartas
function task(i) {
    setTimeout(() => {
        document.getElementById("cardsContainer").innerHTML += createCard(i);
    }, 100 * i);
}*/

function loadGameScript() {
    for (let i = 0; i < 17; i++)
        createCard(i);

    for (let i = 0; i < arrayCards.length; i++) {
        for (let j = 0; j < 2; j++)
            <!-- todo arrayCards[i] sostituir por algoritmo aleatorio -->
            document.getElementById("cardsContainer").innerHTML += arrayCards[i];

        i != arrayCards.length - 2 ? i++ : console.log("Finish") ;
    }
}

loadGameScript();

function cardCheck(cardItem) {
    cardItem.style.animation = 'animationCardRotate 5s forwards';
}



