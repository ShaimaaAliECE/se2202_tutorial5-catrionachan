let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let p1 = 'Y';
let p2 = 'X';
let nextLabel = document.getElementById('next-lbl');
nextLabel.innerText = nextPlayer
let counter =0;
//This call will create the buttons needed for the gameboard.
createGameBoard()


function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let btns = document.querySelectorAll('button');
    for (let i=0; i<btns.length; i++)
    {
        btns[i].innerText = '[]';
    }
    
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    let clickedBtn = event.target;
    clickedBtn.innerText = nextPlayer;
    clickedBtn.disabled = true;
    if (nextPlayer === 'X'){
        nextPlayer = 'Y';
    }else if (nextPlayer === 'Y'){
        nextPlayer = 'X';
    }
    nextLabel.innerText = nextPlayer;
    counter++;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    
    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.getElementById('game-over-lbl');
        nextLabel.innerHTML = '<h1>GameOver</h1>'
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   
    return (counter == 9);
}
