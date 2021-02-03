const arrayCards = [];

function createCard(i) {
    arrayCards.push('<div onclick="cardCheck(this)" name="cardID" id="cardID_' + i + '"><span id="letter">DYZ</span></div>');
}

// Efecto de carga en las cartas
function task(sp) {
    setTimeout(() => {
        sp[5].style.display = 'block';
    }, 700);
}

function f() {
    let span = Array.from(document.querySelectorAll('span'));

    task(span);

}

function loadGameScript() {
    for (let i = 0; i < 17; i++)
        createCard(i);

    for (let i = 0; i < arrayCards.length; i++) {
        for (let j = 0; j < 2; j++)
            <!-- todo arrayCards[i] sostituir por algoritmo aleatorio -->
            document.getElementById("cardsContainer").innerHTML += arrayCards[i];

        i != arrayCards.length - 2 ? i++ : console.log("Finish") ;
    }

    let span = Array.from(document.querySelectorAll('span'));
    for (let i = 0; i < span.length; i++) {
        span[i].style.display = 'none';
    }

    document.getElementById('cardsContainer').addEventListener("animationstart", f);

}

loadGameScript();

function cardCheck(cardItem) {
    cardItem.style.animation = 'animationCardRotateReveal 2.5s forwards';

}



