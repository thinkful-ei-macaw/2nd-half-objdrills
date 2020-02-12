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
    console.log(result);
  }
  let result1 = result.join('');
  console.log(result1)
}

decodeWords('craft block argon meter bells brown croon droop');