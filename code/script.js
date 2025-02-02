// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
const guessButton = document.querySelectorAll('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playagainButton = document.getElementById('playAgain')

console.log = () => {};


/*
More doms to possibly add:
question-section
restart button
filter button
winOrLose
playAgain button

Todo:

*Generate board (how to invoke function - generateBoard() didn't work?)

Assign secret : 
make a function that outputs random character
Total characters: 24 - Set Math.floor(Math.random() * 24)+1; ?

Make selectQuestion work:
  -when should it be invoked?
  You can access a <select> element by using getElementById():
  var x = document.getElementById("questions");
  -optgroup???
  Select Object Methods remove()	Removes an option from a drop-down list
  options	- Returns a collection of all the options in a drop-down list
  add eventlistener that on click selects certain optgroup?
  HTML change event
  const selectElement = document.querySelector('.ice-cream');
  selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

set up select event w all options to ask about

set up global variable currentQuestion to compare w secretperson
set up variables "category" and "value" (questions.options[questions.selectedIndex])


when clicking find out - invoke checkQuestion (w eventlistener)
  needs to check if attributes in currenQuestion matches "secret"
  keep all w. attribute or remove all w attribute
  call filterCharacters - function argument= keep (true/false)
  "Does the person have yellow hair" 
  and the person stored in the secret has yellow hair, 
  we want to call filterCharacters(true).

feedback to player: use alert() 
  1st step: check in what category to customize alert reply
  check with keep-param to give yes/no answer

filter out parts of charactersInPlay array 
    Example 1: const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

    Example 2: const ages = [32, 33, 16, 40];
    const result = ages.filter(checkAdult);

    function checkAdult(age) {
    return age >= 18;
    }
    Remember that you also need to re render the game board 
    so that only the people still in play is shown.

Guess - Make guess button show only on hover
      - make player confirm (ends game)
      -if confirm > checkMyGuess function
      checkmyguessfunction: argument in function=selected person 
      compare if personToCheck === secret
      message win/lose
      hide board



*/



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?

  window.onload = () => {
  generateBoard() 
  }

  setSecret()

  winOrLose.style.display = 'none'
  board.style.display = 'flex'

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value,
  }


}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  //Split up to separate if's
  if (category === 'hair') {
    if (currentQuestion.value === secret[category]) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } if (category === 'eyes') {
    if (currentQuestion.value === secret[category]) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === 'accessories') {
    if (secret[category].includes(value)){
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === 'other') {
    if (secret[category].includes(value)){
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } 
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
      if (keep) {alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } 
        else {alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        }
    }     
    else if (category === 'other') {
      if (keep) {alert(`Yes, smoker. Keep all smokers.`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      }
        else {alert(`No, filter out all smokers`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        }
    }  
    else if (category === 'eyes'){
      if (keep) {alert(`correct, person has ${value} eyes.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } 
        else {alert(`no, person dont have ${value} eyes. Remove?`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
        }
    } 
    else if (category === 'hair'){
      if (keep) {alert(`correct, person has ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } 
        else {alert(`no, person dont have ${value} hair. Remove?`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
        }
    };

    generateBoard();
}  
  

//onclick="guess('${person.name}')

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?

  //personToConfirm; charactersInPlay.forEach((person) => {

  const userConfirmation = confirm(`Are you sure to guess on ${personToConfirm}? You only get one guess.`);

  if (userConfirmation) {
    checkMyGuess(personToConfirm);
    }
   
  // If the player wants to guess, invoke the checkMyGuess function.
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    
    if (personToCheck === secret.name) {
        winOrLoseText.innerHTML = ` ${personToCheck} is correct!`;
    } else if (personToCheck.name !== secret.name) {
        winOrLoseText.innerHTML = ` ${personToCheck} is wrong!`;
    }

    winOrLose.style.display = 'flex'
    board.style.display = 'none'
  
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

const restart = () => {
    window.location.reload();
}


// All the event listeners
questions.addEventListener('change', selectQuestion)
findoutButton.addEventListener('click', checkQuestion)
playagainButton.addEventListener('click', start)
restartButton.addEventListener('click', restart)



