'use strict';
// Object exercise 05

// Object 04 EXERCISE

const softwareEngi = [
  {
    name: 'Brad',
    jobTitle: 'Intern',
    boss: 'developer'
  },
  {
    name: 'Jess',
    jobTitle: 'Boss'
  },
  {
    name: 'Sacha',
    jobTitle: 'developer',
    boss: 'boss'
  }
] 
  
for (const obj in softwareEngi) {
  if (softwareEngi[obj].boss === undefined){
    console.log(`"${softwareEngi[obj].jobTitle} ${softwareEngi[obj].name} doesn't report to anybody."`)
  } else {
    console.log(`"${softwareEngi[obj].jobTitle} ${softwareEngi[obj].name} reports to ${softwareEngi[obj].boss}."`);
  }
}

// objects exercise 6

function decode(word) {
  const cipher = {
    'a': word.charAt(1),
    'b': word.charAt(2),
    'c': word.charAt(3),
    'd': word.charAt(4)
  }
  const string = ' ';
  for (const key in cipher) {
    if (key === word[0]){
      return cipher[key];
    }
        
  }
  return string;
}

console.log(decode('abera'));

function decodeWords(words){
  const newArr = words.split(' ');
  console.log(newArr);
  let result = [];
  for( let i = 0; i < newArr.length; i++) {
    result.push(decode(newArr[i]));
    
  }
  let result1 = result.join('');
  console.log(result1)
}

decodeWords('craft block argon meter bells brown croon droop');

// Last 07 exercise

function createCharacter(name, nickName, race, origin, attack, defense) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return (`"${this.name} is a ${this.race} from ${origin}"`);
    },
    evaluateFight: function(character) {
      return `"Your opponent takes ${this.attack - character.defense} damage and you recieve ${this.defense - character.attack}"`;
    }
  }
}

let characters = [createCharacter('Gandalf the White', 'gandalf', 'wizard', 'middle earth', 10, 6), createCharacter('Bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1), createCharacter('Frodo baggins', 'frodo', 'hobbit', 'the shire', 3, 2),createCharacter('Aragorn son of Arathorn', 'aragorn', 'man', 'dunnedain', 6, 8), createCharacter('Legolas', 'legolas', 'elf', 'woodlan realm', 8, 5), createCharacter('Arwen Undomiel', 'Arwen', 'Half-elf', 'rivendell', 2, 1)];

console.log(characters);

const badAss = characters.find(({nickName}) => nickName === 'aragorn');
console.log(badAss);

console.log(badAss.describe());

const newArr = characters.filter(({race}) => race === 'hobbit');
console.log(newArr);

const newArr2 = characters.filter(({attack}) => attack > 5);
console.log(newArr2);