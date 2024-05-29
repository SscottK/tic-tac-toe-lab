/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squareId
let recentSquare
let message
let turn

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
messageEl.textContent = "X goes first"

const updateTurn = () => {
    
    if (turn === 'X') {
        turn = 'O'
        messageEl.textContent = `X's turn`
    } else {
        turn = 'X'
        messageEl.textContent = `O's turn`
    }

}


const updateId = (event) => {     
    // squareId = event.target.id
    
    if (squareId !== recentSquare && event.target.textContent === '') {
       updateTurn()
        
        event.target.textContent = turn
        console.log(event.target.textContent)
        // recentSquare = squareId
        
    } else {
        messageEl.textContent = 'Sorry pick another square'
    }
} 




/*----------------------------- Event Listeners -----------------------------*/

squares.forEach((square) => {
    square.addEventListener('click', updateId)

})



