const arrayCards = [];
const tempCards = [];

let score = 0;

function createCard(i) {
    let card = '<div name="cardID" id="cardID_' + i + '" class="col-2 cardObject">' +
        '<div id="cardFront"></div>' +
        '<div id="cardBack"></div>' +
        '</div>';

    // Doble para generar los pares de cartas
    arrayCards.push(card);
    arrayCards.push(card);
}

function saveScore(value) {
    document.getElementById("score").innerHTML = value;
}

function checkCard(card) {

    if (tempCards.length <= 1) {
        tempCards.push(card);

        // Si es undefined, es la primera carta y solo interesa guardarla
        if (tempCards[1] != undefined) {

            // Si coincide
            if (tempCards[0].id == tempCards[1].id) {
                for (let i = 0; i < 2; i++) {
                    // Elimina el evento click
                    tempCards[i].style.pointerEvents = 'none';
                }

                tempCards[0].children[1].style.background = 'linear-gradient(0deg, rgba(58, 119, 49, 0.53), rgba(51, 176, 41, 0.2))';
                tempCards[1].children[1].style.background = 'linear-gradient(0deg, rgba(58, 119, 49, 0.53), rgba(51, 176, 41, 0.2))';

                // Si ha ganado, si no, suma
                score != 8 ? saveScore(++score)
                           : document.getElementById("winText").innerHTML = '¡Has ganado!';

                tempCards.splice(0, 2);

            // Si no coincide
            } else if (tempCards[1].id == card.id) {
                setTimeout(() => {
                    card.style.animation = 'flip-2-hor-bottom-1 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';
                    tempCards[0].style.animation = 'flip-2-hor-bottom-1 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';
                    loadEffect(tempCards[0], card, 300);

                    tempCards.splice(0, 2);
                }, 1500);
            }
        }

        return true;
    } else {
        return false;
    }
}

function loadGameScript() {
    for (let i = 0; i < 9; i++)
        createCard(i);

    shuffleArray(arrayCards);

    // Inserto las tablas en el DOM
    for (let i = 0; i < arrayCards.length; i++)
        document.getElementById("cardsContainer").innerHTML += arrayCards[i];

    document.querySelectorAll('.cardObject').forEach(card => {

        // Inserta la cara trasera correspondiente
        showBackImage(card);

        card.addEventListener('click', () => {
            if (checkCard(card)) {
                card.style.animation = 'animationFlipCard 1s forwards';
                loadEffect(card, null, 300);
            }
        });

    });

}
