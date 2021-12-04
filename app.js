document.addEventListener('DOMContentLoaded' , () => {
    //card options
    const cardArray=[
        {
            name:'fries',
            img:'images/fries.jpg'
        },
        {
            name:'fries',
            img:'images/fries.jpg'
        },
        {
            name:'burger',
            img:'images/burger.png'
        },
        {
            name:'burger',
            img:'images/burger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name:'hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.jpg'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.jpg'
        },
        {
            name:'milkshake',
            img:'images/milkshake.jpg'
        },
        {
            name:'milkshake',
            img:'images/milkshake.jpg'
        },
        {
            name:'pizza',
            img:'images/pizza.jpg'
        },
        {
            name:'pizza',
            img:'images/pizza.jpg'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid=document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen= []
    var cardsChosenId= []
    var cardsWon=[]
    //create ur board
    function createBoard(){
        for(i=0; i<cardArray.length;i++){
            var card=document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    //check for  matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0]== cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.jpg')
            cards[optionTwoId].setAttribute('src','images/blank.jpg')
            alert('sorry,try again')
        }
        cardsChosen= []
        cardsChosenId=[]
        resultDisplay.textContent= cardsWon.length
        if (cardsWon.length==cardArray.length/2){
            resultDisplay.textContent("Congratulations!you found them all")
        }
    }

    //flip your card
    function flipCard(){
        var cardId= this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length==2){
            setTimeout(checkForMatch ,500)
        }

    }
    createBoard()
})