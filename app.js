document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'ampoule',
            img: 'images/ampoule.png'
        },
        {
            name: 'ampoule',
            img: 'images/ampoule.png'
        },
        {
            name: 'branding',
            img: 'images/branding.png'
        },
        {
            name: 'branding',
            img: 'images/branding.png'
        },
        {
            name: 'code',
            img: 'images/code.png'
        },
        {
            name: 'code',
            img: 'images/code.png'
        },
        {
            name: 'cursor',
            img: 'images/cursor.png'
        },
        {
            name: 'cursor',
            img: 'images/cursor.png'
        },
        {
            name: 'presentation',
            img: 'images/presentation.png'
        },
        {
            name: 'presentation',
            img: 'images/presentation.png'
        },
        {
            name: 'settings',
            img: 'images/settings.png'
        },
        {
            name: 'settings',
            img: 'images/settings.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChoisis = [];
    var cardsChoisisId = [];
    var cardsGagnee = [];
    //creation du board

    function createBoard() {
        for (let i = 0; i< cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatches(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChoisisId[0];
        const optiontwoId = cardsChoisisId[1];
        if (cardsChoisis[0] === cardsChoisis[1]){
            alert('Vous avez trouvé une paire !');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optiontwoId].setAttribute('src', 'images/white.png');
            cardsGagnee.push(cardsChoisis);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optiontwoId].setAttribute('src', 'images/blank.png');
            alert('Loupé, essaye encore !');
        }
        cardsChoisis = [];
        cardsChoisisId = [];
        resultDisplay.textContent = cardsGagnee.length;

        if (cardsGagnee.length === cardArray.length/2){
            resultDisplay.textContent = 'Félicitation, vous avez gagné !! Pour rejouer rafraichissez la page :-)';
        }
    }

    //flip cards
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChoisis.push(cardArray[cardId].name);
        cardsChoisisId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChoisis.length === 2){
            setTimeout(checkForMatches, 500)
        }
    }


    createBoard();
})