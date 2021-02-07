const arrayCards = [];

function createCard(i) {
    let card = '<div name="cardID" id="cardID_' + i + '" class="col-2 cardObject">' +
        '<div id="cardFront"></div>' +
        '<div id="cardBack"></div>' +
        '</div>';

    // Doble para que las cartas coincidan
    arrayCards.push(card);
    arrayCards.push(card);
}

// Barajea la array
function shuffleArray(inputArray){
    let i,j,k;
    for (i = inputArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = inputArray[i - 1];
        inputArray[i - 1] = inputArray[j];
        inputArray[j] = k;
    }
}

// Efecto de carga en las cartas
function loadEffect(card) {
    setTimeout(() => {
        card.children[1].style.backfaceVisibility = 'visible';
    }, 300);
}

function loadGameScript() {
    for (let i = 0; i < 9; i++)
        createCard(i);

    shuffleArray(arrayCards);

    // Añade las cartas al contenedor
    for (let i = 0; i < arrayCards.length; i++)
        document.getElementById("cardsContainer").innerHTML += arrayCards[i];

    // Añade el EventListener a cada carta
    document.querySelectorAll('.cardObject').forEach(card => {
        showBackImage(card);

        card.addEventListener('click', () => {
            card.style.animation = 'animationFlipCard 1s forwards';
            loadEffect(card);
        });

    });

}