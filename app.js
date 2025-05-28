// SECTION state 🧠 (global variables)

let firstName = 'jeremy'
const lastName = 'fowler'


firstName = 'jerms'
// lastName = 'boogers' cannot reassign a constant value

const partyAnimals = [
  {
    name: 'sherbert',
    emoji: '🫎',
    location: 'taj-mahal'
  },
  {
    name: 'lil jeremy',
    emoji: '🦒',
    location: 'taj-mahal'
  },
  {
    name: 'jerry',
    emoji: '🦄',
    location: 'amazon-river'
  },
  {
    name: 'jim',
    emoji: '🐸',
    location: 'swamp'
  },
  {
    name: 'rupert',
    emoji: '🦎',
    location: 'cave'
  },
  {
    name: 'spot',
    emoji: '🐼',
    location: 'cave'
  },
  {
    name: 'mr. polar bear',
    emoji: '🐻‍❄️',
    location: 'cave'
  },
]


// NOTE length property of an array tells you how many items are in an array
// console.log('length of array is ' + partyAnimals.length);

// console.log(4 == '4'); true
// console.log(4 === '4'); false

// !SECTION

// SECTION logic ⚙️ (state changes)

function moveAnimalsToCave() {
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i];
    animal.location = 'cave'
    console.log(`${animal.name} is now at the ${animal.location}`);
  }

  drawAllAnimals()
}

function moveAnimalsToSwamp() {
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i];
    animal.location = 'swamp'
    console.log(`${animal.name} is now at the ${animal.location}`);
  }

  drawAllAnimals()
}

function moveAnimalsToLocation(location) {
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i];
    animal.location = location
    console.log(`${animal.name} is now at the ${animal.location}`);
  }

  drawAllAnimals()
}

// !SECTION

// SECTION drawing ✏️

function drawCaveAnimals() {
  const caveElem = document.getElementById('cave')
  // console.log('drawing cave animals', caveElem);

  let emojis = ''

  for (let i = 0; i < partyAnimals.length; i++) {
    // console.log('i is ' + i);
    const animal = partyAnimals[i]
    if (animal.location == 'cave') {
      // console.log(animal);
      emojis += animal.emoji
    }
  }

  caveElem.innerText = emojis
}

function drawTajMahalAnimals() {
  const tajMahalElem = document.getElementById('taj-mahal')
  let emojis = ''
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i]
    if (animal.location == 'taj-mahal') {
      emojis += animal.emoji
    }
  }

  tajMahalElem.innerText = emojis
}

function drawAnimalsAtLocation(location) {
  const locationElem = document.getElementById(location)


  let emojis = ''
  for (let i = 0; i < partyAnimals.length; i++) {
    const animal = partyAnimals[i]
    if (animal.location == location) {
      // console.log(animal);
      emojis += animal.emoji
    }
  }

  console.log(emojis);
  locationElem.innerText = emojis
}

function drawAllAnimals() {
  drawAnimalsAtLocation('swamp')
  drawAnimalsAtLocation('amazon-river')
  drawAnimalsAtLocation('cave')
  drawAnimalsAtLocation('taj-mahal')
}


// !SECTION

// SECTION page load 🔃

// drawCaveAnimals()
// drawTajMahalAnimals()
// drawAnimalsAtLocation('swamp')
// drawAnimalsAtLocation('amazon-river')

drawAllAnimals()
// !SECTION