const arrayCards = [];
const repeatIndexCards = [];

function createCard(i) {
    let card = '<div name="cardID" id="cardID_' + i + '" class="col-2 cardT">' +
        '<div id="cardFront"></div>' +
        '<div id="cardBack"></div>' +
        '</div>';

    // Doble para que las cartas coincidan
    arrayCards.push(card);
    arrayCards.push(card);
}

// Efecto de carga en las cartas
function loadEffect(card) {
    setTimeout(() => {
        card.children[1].style.backfaceVisibility = 'visible';
    }, 300);
}

function shuffleArray(inputArray){
    let i,j,k;
    for (i = inputArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = inputArray[i - 1];
        inputArray[i - 1] = inputArray[j];
        inputArray[j] = k;
    }
}

function loadGameScript() {
    for (let i = 0; i < 9; i++)
        createCard(i);

    // Barajea el array de cartas
    shuffleArray(arrayCards);

    for (let i = 0; i < arrayCards.length; i++) {
        document.getElementById("cardsContainer").innerHTML += arrayCards[i];
    }

    document.querySelectorAll('.cardT').forEach(card => {
        card.addEventListener('click', () => {
            card.style.animation = 'animationFlipCard 1s forwards';
            loadEffect(card);

        });
    });

}