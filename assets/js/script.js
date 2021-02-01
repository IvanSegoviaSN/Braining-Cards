for (let i = 0; i < 18; i++) {
    document.getElementById("cardsContainer").innerHTML += '<div onclick="cardCheck(this)" id="cardID_' + i + '" class="col-2"></div>';
}

function cardCheck(cardItem) {
    alert(cardItem.id)
}