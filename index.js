document.addEventListener('DOMContentLoaded', () => {

const cardArr=[
    {
        name: 'Mercedes',
        img: '_Images/mercedes.png'
    },
    {
        name: 'Quote',
        img: '_Images/Quote.jpg'
    },
    {
        name: 'Harry Porter',
        img: '_Images/Motive.jpg'
    },
    {
        name: 'Battery',
        img: '_Images/Battery.jpg'
    },
    {
        name: 'Dual',
        img: '_Images/Dual.jpg'
    },
    {
        name: 'okhi-90-red',
        img: '_Images/okhi-90-red.jpg'
    },
    {
        name: 'okinawa',
        img: '_Images/okinawa.jpg'
    },
    {
        name: 'praisepro2',
        img: '_Images/praisepro2.jpg'
    },
    {
        name: 'Block',
        img: '_Images/Block.jpg'
    },
    {
        name: 'Mercedes',
        img: '_Images/mercedes.png'
    },
    {
        name: 'Quote',
        img: '_Images/Quote.jpg'
    },
    {
        name: 'Harry Porter',
        img: '_Images/Motive.jpg'
    },
    {
        name: 'Battery',
        img: '_Images/Battery.jpg'
    },
    {
        name: 'Dual',
        img: '_Images/Dual.jpg'
    },
    {
        name: 'okhi-90-red',
        img: '_Images/okhi-90-red.jpg'
    },
    {
        name: 'okinawa',
        img: '_Images/okinawa.jpg'
    },
    {
        name: 'praisepro2',
        img: '_Images/praisepro2.jpg'
    },
    {
        name: 'Block',
        img: '_Images/Block.jpg'
    },
   
]

// to sort randomly we use 0.5-Math.random() because it is comparing with 0.5
cardArr.sort(()=>0.5 - Math.random())

const gridd=document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src','_Images/Blockora.jpg')
      cards[optionTwoId].setAttribute('src', '_Images/Blockora.jpg')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '_Images/white.png')
      cards[optionTwoId].setAttribute('src', '_Images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '_Images/Blockora.jpg')
      cards[optionTwoId].setAttribute('src',' _Images/Blockora.jpg')
    //  alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArr.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArr[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
  function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src',' _Images/Blockora.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridd.appendChild(card)
    }
  }
  createBoard()
})
// const resultdisplay=document.querySelector('#result')
// let cardchosen=[]
// let cardchosenIds=[]
// let cardsWon=[]

// function createBoard(){
//     // for each item in my array i can create an item so for that i can use for loop
//    for(let i=0;i<cardArr.length;i++){
//      const card =document.createElement('img')
//      card.setAttribute ('src', '_Images/Blockora.jpg')
//      // each card should have unique id so
//      card.setAttribute('data-id',i)
//      card.addEventListener('click',flipCard)
//     gridd.appendChild(card)
//    }
// }
// function checkMatch() {
//     const cards=document.querySelectorAll('img')
//     const optiononeId = cardchosenIds[0]
//     const optiontwoId = cardchosenIds[1]
    
//    console.log(cards)
//     console.log('check for match')
//      if (optiononeId==optiontwoId) {
//         cards[optiononeId].setAttribute('src','_Images/Blockora.jpg')
//         cards[optiontwoId].setAttribute('src','_Images/Blockora.jpg')
//         alert('you have clicked the same card')
        
//      }

//    else if(cardchosen[0]===cardchosen[1]){
//         alert('match found');
//         cards[optiononeId].setAttribute('src','__Images/white.png')
//         cards[optiontwoId].setAttribute('src','__Images/white.png')
//         cards[optiononeId].removeEventListener('click',flipCard)
//         cards[optiontwoId].removeEventListener('click',flipCard)
//         cardsWon.push(cardchosen)
//     } 
//     else{
//         cards[optiononeId].setAttribute('src','_Images/Blockora.jpg')
//         cards[optiontwoId].setAttribute('src','_Images/Blockora.jpg')
//         alert('try again')
//     }
   
//     // to make it once again

//     cardchosen=[]
//     cardchosenIds=[]
//     resultdisplay.textContent = cardsWon.length
//     if (cardsWon.length===cardArr.length/2) {
//         resultdisplay.textContent='congratulation you found them all'
//     }
// }



// function flipCard(){
//  let cardId= this.getAttribute('data-id')
//  cardchosen.push( cardArr[cardId].name);
//  cardchosenIds.push(cardId)
//  this.getAttribute('src',cardArr[cardId].img)

//   if(cardchosen.length===2){
//     setTimeout(checkMatch,500)
//   }
// }
// createBoard()
// })
