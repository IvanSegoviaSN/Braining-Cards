const IMGCARDS = {
    cardID_0: "https://fotos.subefotos.com/71c70cc8f6a9339b427886f76a0ef747o.jpg",
    cardID_1: "https://fotos.subefotos.com/dc1dc10756b3b43a4e912b0c99ed03b1o.jpg",
    cardID_2: "https://fotos.subefotos.com/b5bfb19ca46a3e61eab8b0737de3edcao.jpg",
    cardID_3: "https://fotos.subefotos.com/aaa48c9486e6222112c186ec59a05777o.jpg",
    cardID_4: "https://fotos.subefotos.com/94b36f3996551facab1ac321dd9dc2e5o.jpg",
    cardID_5: "https://fotos.subefotos.com/18765251021df55544524594cfc37b02o.jpg",
    cardID_6: "https://fotos.subefotos.com/89163520229d4fe077802284c3ebbc82o.jpg",
    cardID_7: "https://fotos.subefotos.com/17b251af724e0ef3b1f245fa383fe07eo.jpg",
    cardID_8: "https://fotos.subefotos.com/cad0575bf0d44281f128a34ce4c21693o.jpg",
}

function showBackImage(card) {
    switch (card.id) {
        case 'cardID_0':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_0 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_1':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_1 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_2':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_2 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_3':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_3 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_4':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_4 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_5':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_5 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_6':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_6 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_7':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_7 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
        case 'cardID_8':
            card.children[1].style.background = 'linear-gradient(0deg, #2c8de33d, #9baab94f), url(' + IMGCARDS.cardID_8 + ') no-repeat';
            card.children[1].style.backgroundSize = 'cover';
            break;
    }
}


// Efecto de carga en las cartas
function loadEffect(card0, card1, time) {
    setTimeout(() => {
        if (card1 != null) {
            card0.children[1].style.backfaceVisibility = 'hidden';
            card1.children[1].style.backfaceVisibility = 'hidden';
        } else {
            card0.children[1].style.backfaceVisibility = 'visible';
        }
    }, time);
}

// Barajea el array
function shuffleArray(inputArray, i, j, k) {
    for (i = inputArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = inputArray[i - 1];
        inputArray[i - 1] = inputArray[j];
        inputArray[j] = k;
    }
}