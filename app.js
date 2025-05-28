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
    location: 'swamp'
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
console.log('length of array is ' + partyAnimals.length);



function drawCaveAnimals() {
  const caveElem = document.getElementById('cave')
  console.log('drawing cave animals', caveElem);
  for (let i = 0; i < partyAnimals.length; i++) {
    console.log('i is ' + i);
    const animal = partyAnimals[i]
    console.log(animal.emoji, animal.name);
  }

  caveElem.innerText = '🐻‍❄️🐼'
}
